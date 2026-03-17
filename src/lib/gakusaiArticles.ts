/**
 * 学祭がくれたもの - 学祭を終えた委員長の取材記事サンプル
 */
export interface ArticleSection {
  id: string;
  heading: string;
  content: string;
}

export interface GakusaiArticle {
  id: string;
  title: string;
  excerpt: string;
  chairpersonName: string;
  university: string;
  year: number;
  thumbnailUrl: string;
  publishedAt: string;
  /** 記事本文のセクション（見出し＋本文） */
  sections?: ArticleSection[];
}

export const gakusaiArticleSamples: GakusaiArticle[] = [
  {
    id: "1",
    title: "仲間との絆、そして自分自身の成長",
    excerpt:
      "委員長を務めた1年間で、何百人もの学生と関わり、数え切れない困難を乗り越えました。学祭がくれたのは、かけがえのない仲間と、自分を信じる力でした。",
    chairpersonName: "山田 太郎",
    university: "サンプル大学",
    year: 2024,
    thumbnailUrl: "https://picsum.photos/seed/article1/400/250",
    publishedAt: "2024-12-01",
    sections: [
      {
        id: "kikkake",
        heading: "委員長を志したきっかけ",
        content:
          "2年生の時に先輩の委員長の背中を見て、自分も学園祭を創りたいと思いました。当時は副委員長として運営に携わり、その大変さとやりがいを実感。翌年、自分が委員長になる決意を固めました。",
      },
      {
        id: "konnan",
        heading: "乗り越えた困難",
        content:
          "予算の確保、天候、スタッフの確保…課題は山積みでした。特に本番1ヶ月前、メインステージの機材トラブルでは、業者との交渉を何度も重ね、チーム全員で代替案を考え抜きました。その経験が今の自分を形作っています。",
      },
      {
        id: "takaramono",
        heading: "学祭がくれたもの",
        content:
          "何より大きかったのは仲間の存在です。喜びも悲しみも分かち合える仲間ができたこと、そして「やり切った」という自信。学祭は、かけがえのない宝物をくれました。",
      },
    ],
  },
  {
    id: "2",
    title: "失敗から学んだ、本当のリーダーシップ",
    excerpt:
      "本番直前のトラブルで全てが崩れかけた時、チーム全員が一丸となって乗り越えた経験は、今の自分を形作る大きな転機になりました。",
    chairpersonName: "佐藤 花子",
    university: "サンプル大学",
    year: 2023,
    thumbnailUrl: "https://picsum.photos/seed/article2/400/250",
    publishedAt: "2024-01-15",
    sections: [
      {
        id: "start",
        heading: "委員長としてのスタート",
        content:
          "3年生の春、委員長に就任しました。最初は「自分にできるのか」という不安ばかり。でも、実行委員会の仲間が支えてくれて、少しずつ前に進むことができました。",
      },
      {
        id: "kiki",
        heading: "本番直前の危機",
        content:
          "学祭の3日前、メイン会場の使用許可に問題が発生。一晩で代替案を練り、大学側・業者と交渉。チーム全員が徹夜で動き、なんとか本番に間に合わせました。あの時学んだのは、リーダーは「一人で頑張る」のではなく「みんなの力を引き出す」ことだと。",
      },
      {
        id: "owari",
        heading: "学祭を終えて",
        content:
          "今振り返ると、あの危機が自分を成長させてくれたと感じます。就活でも「困難を乗り越えた経験」として話し、多くの企業から評価いただきました。",
      },
    ],
  },
  {
    id: "3",
    title: "学祭を通じて見つけた、自分のやりたいこと",
    excerpt:
      "企画・運営・交渉…学祭で経験した全てが、就活やその後の人生に活きています。学生のうちにこれだけの経験ができたことは本当に宝物です。",
    chairpersonName: "田中 一郎",
    university: "サンプル大学",
    year: 2022,
    thumbnailUrl: "https://picsum.photos/seed/article3/400/250",
    publishedAt: "2023-06-20",
    sections: [
      {
        id: "deai",
        heading: "学祭との出会い",
        content:
          "1年生の時、友人に誘われて模擬店のスタッフとして参加。その楽しさに惹かれ、2年目から実行委員会に加入。企画・広報・渉外と様々な役割を経験しました。",
      },
      {
        id: "sukiru",
        heading: "身についたスキル",
        content:
          "予算管理、スケジュール調整、外部との交渉…実務に近い経験を積めました。特に「相手の要望を聞き、Win-Winを探る」交渉術は、今の仕事に直結しています。",
      },
      {
        id: "ima",
        heading: "今に活きていること",
        content:
          "学祭で「人を喜ばせる仕事がしたい」と気づき、今はイベント企画の会社で働いています。あの経験がなければ、今の自分はいません。",
      },
    ],
  },
];

export function getGakusaiArticleById(id: string): GakusaiArticle | undefined {
  return gakusaiArticleSamples.find((a) => a.id === id);
}
