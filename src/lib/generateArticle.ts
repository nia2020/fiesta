/**
 * AI による取材記事生成（Gemini 使用）
 */
import { GoogleGenAI } from "@google/genai";

export interface InterviewAnswers {
  chairpersonName: string;
  university: string;
  year: number;
  kikkake: string; // 委員長を志したきっかけ
  konnan: string; // 乗り越えた困難
  takaramono: string; // 学祭がくれたもの
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

export async function generateArticle(
  answers: InterviewAnswers,
  photoDescriptions?: string[]
): Promise<GeneratedArticle> {
  const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY または GOOGLE_API_KEY が設定されていません");
  }

  const ai = new GoogleGenAI({ apiKey });

  const photoContext = photoDescriptions?.length
    ? `\n\n【ユーザーが提供した写真の説明】\n${photoDescriptions.join("\n")}\n\n上記の写真の雰囲気や内容を、適切なセクションの記事に織り交ぜてください。`
    : "";

  const systemInstruction = `あなたは学園祭の取材記事を書くプロのライターです。
学祭を終えた委員長へのインタビュー回答を、読みやすい記事形式に整えてください。

出力は必ず以下のJSON形式で返してください。他のテキストは含めないでください。
{
  "title": "記事のタイトル（20文字程度、感動的で印象的）",
  "excerpt": "記事の要約（2〜3文、80〜120文字）",
  "sections": [
    { "heading": "委員長を志したきっかけ", "content": "本文（2〜4文）" },
    { "heading": "乗り越えた困難", "content": "本文（2〜4文）" },
    { "heading": "学祭がくれたもの", "content": "本文（2〜4文）" }
  ]
}

ルール:
- 回答の内容を忠実に活かしつつ、読みやすく整える
- 一人称は「私」で統一
- 過度に脚色せず、本人の言葉を大切に
- sections の順序と見出しは上記の通りにすること`;

  const userPrompt = `以下のインタビュー回答を記事にしてください。

【委員長名】${answers.chairpersonName}
【大学】${answers.university}
【年度】${answers.year}年度

【委員長を志したきっかけ】
${answers.kikkake}

【乗り越えた困難】
${answers.konnan}

【学祭がくれたもの】
${answers.takaramono}
${photoContext}`;

  let content: string | undefined;
  try {
    // gemini-1.5-flash を優先（無料枠が安定している場合が多い）
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });
    content = response.text;
  } catch (err: unknown) {
    const msg = (err as Error)?.message ?? "";
    const isQuotaError =
      msg.includes("429") ||
      msg.includes("RESOURCE_EXHAUSTED") ||
      msg.includes("quota") ||
      msg.includes("exceeded");

    if (isQuotaError) {
      throw new Error(
        "APIの利用制限に達しました。10〜15分ほど待ってから再度お試しください。"
      );
    }
    throw err;
  }
  if (!content) {
    throw new Error("AI からの応答がありませんでした");
  }

  const parsed = JSON.parse(content) as {
    title?: string;
    excerpt?: string;
    sections?: Array<{ heading?: string; content?: string }>;
  };

  if (!parsed.title || !parsed.excerpt || !Array.isArray(parsed.sections)) {
    throw new Error("AI の応答形式が不正です");
  }

  const headings = [
    "委員長を志したきっかけ",
    "乗り越えた困難",
    "学祭がくれたもの",
  ];
  const sections: GeneratedSection[] = headings.map((h, i) => {
    const s = parsed.sections?.[i];
    return {
      heading: s?.heading ?? h,
      content: s?.content ?? "",
    };
  });

  return {
    title: parsed.title,
    excerpt: parsed.excerpt,
    sections,
  };
}
