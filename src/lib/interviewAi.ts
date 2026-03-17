/**
 * AI 取材 - 質問生成と記事化（Gemini 使用）
 */
import { GoogleGenAI } from "@google/genai";

export interface ChatMessage {
  role: "ai" | "user";
  content: string;
}

export interface GeneratedSection {
  heading: string;
  content: string;
}

export interface GeneratedArticle {
  title: string;
  excerpt: string;
  sections: GeneratedSection[];
}

const TOPICS = [
  "委員長を志したきっかけ",
  "乗り越えた困難",
  "学祭がくれたもの",
] as const;

function getAiClient() {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY が設定されていません");
  return new GoogleGenAI({ apiKey });
}

/** 次の質問を生成（会話履歴から） */
export async function generateNextQuestion(
  conversation: ChatMessage[],
  offer: { chairpersonName: string; university: string; year: number }
): Promise<{ question: string; isComplete: boolean }> {
  const ai = getAiClient();

  const systemInstruction = `あなたは学園祭の取材を行うプロのライターです。
学祭を終えた委員長に、以下の3つのテーマについて順番に質問し、深掘りしていきます。

テーマ（順番に聞く）:
1. 委員長を志したきっかけ
2. 乗り越えた困難
3. 学祭がくれたもの

ルール:
- 1回に1つの質問だけする
- 相手の回答に共感し、自然な流れで次の質問や深掘りをする
- 十分な情報が集まったら「取材は以上です。記事を作成します」と伝える
- 出力は必ずJSON形式: { "question": "質問文", "isComplete": true/false }`;

  const history = conversation
    .map((m) => (m.role === "ai" ? `取材者: ${m.content}` : `委員長: ${m.content}`))
    .join("\n");

  const userPrompt = `【取材対象】${offer.chairpersonName}（${offer.university} ${offer.year}年度）

【これまでの会話】
${history || "（まだ会話なし）"}

次の質問を1つ生成してください。3つのテーマすべてについて十分な回答が得られたら、isComplete を true にしてください。`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("AI からの応答がありませんでした");

    const parsed = JSON.parse(text) as { question?: string; isComplete?: boolean };
    return {
      question: parsed.question ?? "他に学祭で印象に残っていることはありますか？",
      isComplete: parsed.isComplete ?? false,
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes("GEMINI_API_KEY") || msg.includes("設定されていません")) {
      throw new Error("GEMINI_API_KEY が設定されていません。.env を確認してください。");
    }
    throw err;
  }
}

/** 会話から記事を生成 */
export async function generateArticleFromConversation(
  conversation: ChatMessage[],
  offer: { chairpersonName: string; university: string; year: number }
): Promise<GeneratedArticle> {
  const ai = getAiClient();

  const systemInstruction = `あなたは学園祭の取材記事を書くプロのライターです。
取材の会話内容を、読みやすい記事形式に整えてください。

出力は必ず以下のJSON形式で返してください。
{
  "title": "記事のタイトル（20文字程度）",
  "excerpt": "記事の要約（2〜3文、80〜120文字）",
  "sections": [
    { "heading": "委員長を志したきっかけ", "content": "本文（2〜4文）" },
    { "heading": "乗り越えた困難", "content": "本文（2〜4文）" },
    { "heading": "学祭がくれたもの", "content": "本文（2〜4文）" }
  ]
}

ルール:
- 会話の内容を忠実に活かす
- 一人称は「私」で統一
- 過度に脚色せず、本人の言葉を大切に`;

  const interviewText = conversation
    .map((m) => (m.role === "ai" ? `Q: ${m.content}` : `A: ${m.content}`))
    .join("\n\n");

  const userPrompt = `【取材対象】${offer.chairpersonName}（${offer.university} ${offer.year}年度）

【取材の会話】
${interviewText}

上記の会話をもとに、記事を作成してください。`;

  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: userPrompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  const text = response.text;
  if (!text) throw new Error("AI からの応答がありませんでした");

  const parsed = JSON.parse(text) as {
    title?: string;
    excerpt?: string;
    sections?: Array<{ heading?: string; content?: string }>;
  };

  const sections: GeneratedSection[] = TOPICS.map((h, i) => {
    const s = parsed.sections?.[i];
    return { heading: s?.heading ?? h, content: s?.content ?? "" };
  });

  return {
    title: parsed.title ?? "学祭がくれたもの",
    excerpt: parsed.excerpt ?? "",
    sections,
  };
}
