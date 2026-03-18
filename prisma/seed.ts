import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_PRISMA_URL ??
  process.env.POSTGRES_URL;
if (!connectionString?.startsWith("postgresql") && !connectionString?.startsWith("postgres://")) {
  throw new Error("DATABASE_URL must be a PostgreSQL connection string (postgres:// or postgresql://)");
}
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hash = await bcrypt.hash("password123", 10);

  await prisma.user.upsert({
    where: { email: "admin@fiesta.example" },
    update: {},
    create: {
      email: "admin@fiesta.example",
      passwordHash: hash,
      name: "システム管理者",
      role: "SYSTEM_ADMIN",
    },
  });

  const univ1 = await prisma.university.upsert({
    where: { slug: "example-university" },
    update: {},
    create: {
      name: "サンプル大学",
      slug: "example-university",
      description: "学園祭で有名なサンプル大学です。",
    },
  });

  const chair1User = await prisma.user.upsert({
    where: { email: "chair2024@example.com" },
    update: {},
    create: {
      email: "chair2024@example.com",
      passwordHash: hash,
      name: "山田 太郎",
      role: "CHAIRPERSON",
      department: "経済学部",
      bio: "2024年度実行委員長です。",
    },
  });

  const chair2User = await prisma.user.upsert({
    where: { email: "chair2023@example.com" },
    update: {},
    create: {
      email: "chair2023@example.com",
      passwordHash: hash,
      name: "佐藤 花子",
      role: "CHAIRPERSON",
      department: "文学部",
      bio: "2023年度実行委員長でした。",
    },
  });

  const fest2023 = await prisma.festival.findFirst({
    where: { universityId: univ1.id, year: 2023 },
  }) ?? await prisma.festival.create({
    data: { universityId: univ1.id, year: 2023, status: "published" },
  });

  const fest2024 = await prisma.festival.findFirst({
    where: { universityId: univ1.id, year: 2024 },
  }) ?? await prisma.festival.create({
    data: { universityId: univ1.id, year: 2024, status: "published" },
  });

  const cp2023 = await prisma.chairperson.findUnique({
    where: { festivalId: fest2023.id },
  }) ?? await prisma.chairperson.create({
    data: {
      festivalId: fest2023.id,
      userId: chair2User.id,
      message: "2023年度学園祭を成功させました！",
    },
  });

  await prisma.chairperson.upsert({
    where: { festivalId: fest2024.id },
    update: {},
    create: {
      festivalId: fest2024.id,
      userId: chair1User.id,
      predecessorId: cp2023.id,
      handoverDate: new Date("2024-04-01"),
      handoverComment: "佐藤委員長から引き継ぎました。",
      message: "2024年度も素晴らしい学園祭にします！",
    },
  });

  await prisma.theme.upsert({
    where: { festivalId: fest2024.id },
    update: {},
    create: {
      festivalId: fest2024.id,
      themeName: "絆 - つながる、私たちの想い",
      eventDate: new Date("2024-11-02"),
      eventEndDate: new Date("2024-11-03"),
      venue: "本学キャンパス",
      details: "学生と地域が一体となった学園祭です。",
      accessInfo: "〇〇駅から徒歩10分",
    },
  });

  const existingPlans = await prisma.sponsorPlan.count({
    where: { festivalId: fest2024.id },
  });
  if (existingPlans === 0) {
    await prisma.sponsorPlan.createMany({
      data: [
        { festivalId: fest2024.id, planName: "ゴールド", amount: 100000, benefits: "ロゴ掲載、ブース出展、チラシ配布", displayOrder: 0 },
        { festivalId: fest2024.id, planName: "シルバー", amount: 50000, benefits: "ロゴ掲載、チラシ配布", displayOrder: 1 },
        { festivalId: fest2024.id, planName: "ブロンズ", amount: 20000, benefits: "チラシ配布", displayOrder: 2 },
      ],
    });
  }

  // 注目です用のFestivalHighlightサンプル（サムネ付き）
  const existingHighlights = await prisma.festivalHighlight.count({
    where: { festivalId: fest2024.id },
  });
  if (existingHighlights === 0) {
    await prisma.festivalHighlight.createMany({
      data: [
        {
          festivalId: fest2024.id,
          title: "メインステージで人気アーティストが熱演",
          description: "学園祭のメインイベント。学生と地域が一体となった盛り上がりを見せました。",
          imageUrl: "https://picsum.photos/seed/fest1/400/250",
          displayOrder: 0,
        },
        {
          festivalId: fest2024.id,
          title: "模擬店が大盛況",
          description: "各サークル・ゼミが工夫を凝らした模擬店が並び、来場者で賑わいました。",
          imageUrl: "https://picsum.photos/seed/fest2/400/250",
          displayOrder: 1,
        },
        {
          festivalId: fest2024.id,
          title: "夜のライトアップ",
          description: "キャンパス全体が幻想的な光に包まれる特別な一夜。",
          imageUrl: "https://picsum.photos/seed/fest3/400/250",
          displayOrder: 2,
        },
        {
          festivalId: fest2023.id,
          title: "2023年度の思い出",
          description: "絆をテーマにした学園祭。多くの笑顔が生まれました。",
          imageUrl: "https://picsum.photos/seed/fest4/400/250",
          displayOrder: 0,
        },
      ],
    });
  }

  // 学祭がくれたもの - サンプル記事
  const existingArticles = await prisma.gakusaiArticle.count();
  if (existingArticles === 0) {
    const art1 = await prisma.gakusaiArticle.create({
      data: {
        title: "仲間との絆、そして自分自身の成長",
        excerpt:
          "委員長を務めた1年間で、何百人もの学生と関わり、数え切れない困難を乗り越えました。学祭がくれたのは、かけがえのない仲間と、自分を信じる力でした。",
        chairpersonName: "山田 太郎",
        university: "サンプル大学",
        year: 2024,
        thumbnailUrl: "https://picsum.photos/seed/article1/400/250",
        status: "published",
        publishedAt: new Date("2024-12-01"),
        sections: {
          create: [
            {
              heading: "委員長を志したきっかけ",
              content:
                "2年生の時に先輩の委員長の背中を見て、自分も学園祭を創りたいと思いました。当時は副委員長として運営に携わり、その大変さとやりがいを実感。翌年、自分が委員長になる決意を固めました。",
              displayOrder: 0,
            },
            {
              heading: "乗り越えた困難",
              content:
                "予算の確保、天候、スタッフの確保…課題は山積みでした。特に本番1ヶ月前、メインステージの機材トラブルでは、業者との交渉を何度も重ね、チーム全員で代替案を考え抜きました。その経験が今の自分を形作っています。",
              displayOrder: 1,
            },
            {
              heading: "学祭がくれたもの",
              content:
                "何より大きかったのは仲間の存在です。喜びも悲しみも分かち合える仲間ができたこと、そして「やり切った」という自信。学祭は、かけがえのない宝物をくれました。",
              displayOrder: 2,
            },
          ],
        },
      },
    });
    const art2 = await prisma.gakusaiArticle.create({
      data: {
        title: "失敗から学んだ、本当のリーダーシップ",
        excerpt:
          "本番直前のトラブルで全てが崩れかけた時、チーム全員が一丸となって乗り越えた経験は、今の自分を形作る大きな転機になりました。",
        chairpersonName: "佐藤 花子",
        university: "サンプル大学",
        year: 2023,
        thumbnailUrl: "https://picsum.photos/seed/article2/400/250",
        status: "published",
        publishedAt: new Date("2024-01-15"),
        sections: {
          create: [
            {
              heading: "委員長としてのスタート",
              content:
                "3年生の春、委員長に就任しました。最初は「自分にできるのか」という不安ばかり。でも、実行委員会の仲間が支えてくれて、少しずつ前に進むことができました。",
              displayOrder: 0,
            },
            {
              heading: "本番直前の危機",
              content:
                "学祭の3日前、メイン会場の使用許可に問題が発生。一晩で代替案を練り、大学側・業者と交渉。チーム全員が徹夜で動き、なんとか本番に間に合わせました。あの時学んだのは、リーダーは「一人で頑張る」のではなく「みんなの力を引き出す」ことだと。",
              displayOrder: 1,
            },
            {
              heading: "学祭を終えて",
              content:
                "今振り返ると、あの危機が自分を成長させてくれたと感じます。就活でも「困難を乗り越えた経験」として話し、多くの企業から評価いただきました。",
              displayOrder: 2,
            },
          ],
        },
      },
    });
    const art3 = await prisma.gakusaiArticle.create({
      data: {
        title: "学祭を通じて見つけた、自分のやりたいこと",
        excerpt:
          "企画・運営・交渉…学祭で経験した全てが、就活やその後の人生に活きています。学生のうちにこれだけの経験ができたことは本当に宝物です。",
        chairpersonName: "田中 一郎",
        university: "サンプル大学",
        year: 2022,
        thumbnailUrl: "https://picsum.photos/seed/article3/400/250",
        status: "published",
        publishedAt: new Date("2023-06-20"),
        sections: {
          create: [
            {
              heading: "学祭との出会い",
              content:
                "1年生の時、友人に誘われて模擬店のスタッフとして参加。その楽しさに惹かれ、2年目から実行委員会に加入。企画・広報・渉外と様々な役割を経験しました。",
              displayOrder: 0,
            },
            {
              heading: "身についたスキル",
              content:
                "予算管理、スケジュール調整、外部との交渉…実務に近い経験を積めました。特に「相手の要望を聞き、Win-Winを探る」交渉術は、今の仕事に直結しています。",
              displayOrder: 1,
            },
            {
              heading: "今に活きていること",
              content:
                "学祭で「人を喜ばせる仕事がしたい」と気づき、今はイベント企画の会社で働いています。あの経験がなければ、今の自分はいません。",
              displayOrder: 2,
            },
          ],
        },
      },
    });
    console.log("Gakusai articles created:", [art1.id, art2.id, art3.id]);
  }

  console.log("Seed completed:", { university: univ1.name });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
