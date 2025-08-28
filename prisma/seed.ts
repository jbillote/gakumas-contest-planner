import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient()

async function main() {
  // R
  console.log("Inserting R card information")
  const rResult = await prisma.$executeRaw`INSERT INTO "PCard" ("id", "filename", "name", "type", "plan", "rarity", "cost", "customCharacter") VALUES
    (100, "img_general_skillcard_act-1_002", "軽い足取り", "ACTIVE", "SENSE", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_019", "愛嬌", "ACTIVE", "SENSE", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_022", "準備運動", "ACTIVE", "SENSE", "R", "LOW", true),
    (null, "img_general_skillcard_act-1_001", "ファンサ", "ACTIVE", "SENSE", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_023", "勢い任せ", "ACTIVE", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_020", "ハイタッチ", "ACTIVE", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_021", "トークタイム", "ACTIVE", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_036", "エキサイト", "ACTIVE", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_074", "ペース配分", "ACTIVE", "SENSE", "R", "HIGH", true),
    (null, "img_general_skillcard_act-1_027", "今日もおはよう", "ACTIVE", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_028", "ゆるふわおしゃべり", "ACTIVE", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_029", "もう少しだけ", "ACTIVE", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_003", "手拍子", "ACTIVE", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_004", "元気な挨拶", "ACTIVE", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_037", "デイドリーミング", "ACTIVE", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_038", "ジャストアピール", "ACTIVE", "ANOMALY", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_040", "スターライト", "ACTIVE", "ANOMALY", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_046", "一歩", "ACTIVE", "ANOMALY", "R", "LOW", false),
    (null, "img_general_skillcard_act-1_041", "ラッキー♪", "ACTIVE", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_042", "積み重ね", "ACTIVE", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_act-1_044", "精一杯", "ACTIVE", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_005", "気合十分！", "MENTAL", "FREE", "R", "HIGH", true),
    (null, "img_general_skillcard_men-1_007", "ファーストステップ", "MENTAL", "FREE", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_024", "バランス感覚", "MENTAL", "SENSE", "R", "LOW", false),
    (null, "img_general_skillcard_men-1_025", "楽観的", "MENTAL", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_008", "深呼吸", "MENTAL", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_034", "ひと呼吸", "MENTAL", "SENSE", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_030", "リスタート", "MENTAL", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_men-1_031", "えいえいおー", "MENTAL", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_men-1_006", "リズミカル", "MENTAL", "LOGIC", "R", "LOW", false),
    (null, "img_general_skillcard_men-1_032", "思い出し笑い", "MENTAL", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_033", "パステル気分", "MENTAL", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_009", "励まし", "MENTAL", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_035", "幸せのおまじない", "MENTAL", "LOGIC", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_039", "ハッピー♪", "MENTAL", "ANOMALY", "R", "LOW", false),
    (null, "img_general_skillcard_men-1_049", "嬉しい誤算", "MENTAL", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_048", "涙の思い出", "MENTAL", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_051", "セッティング", "MENTAL", "ANOMALY", "R", "HIGH", false),
    (null, "img_general_skillcard_men-1_050", "巻き返し", "MENTAL", "ANOMALY", "R", "HIGH", false)`
  console.log(rResult)

  // SR
  console.log("Inserting SR card information")
  const srResult = await prisma.$executeRaw`INSERT INTO "PCard" ("id", "filename", "name", "type", "plan", "rarity", "cost", "customCharacter") VALUES
    (200, "img_general_skillcard_act-2_009", "前途洋々", "ACTIVE", "FREE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_003", "決めポーズ", "ACTIVE", "SENSE", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_030", "アドリブ", "ACTIVE", "SENSE", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_031", "情熱ターン", "ACTIVE", "SENSE", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_033", "飛躍", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_042", "祝福", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_002", "スタートダッシュ", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_032", "スタンドプレー", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_001", "シュプレヒコール", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_059", "立ち位置チェック", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_061", "破竹の勢い", "ACTIVE", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_046", "ラブリーウインク", "ACTIVE", "LOGIC", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_047", "ありがとうの言葉", "ACTIVE", "LOGIC", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_045", "ハートの合図", "ACTIVE", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_048", "キラメキ", "ACTIVE", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_049", "みんな大好き", "ACTIVE", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_062", "きらきら紙吹雪", "ACTIVE", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_065", "せーのっ！", "ACTIVE", "ANOMALY", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_072", "アッチェレランド", "ACTIVE", "ANOMALY", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_068", "はじけるパッション", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_069", "汗と成長", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_081", "第一印象", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_063", "オープニングアクト", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_070", "始まりの笑顔", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_082", "トレンドリーダー", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_067", "理想のテンポ", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_act-2_071", "トレーニングの成果", "ACTIVE", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_012", "アイドル宣言", "MENTAL", "FREE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_014", "ハイテンション", "MENTAL", "FREE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_039", "眼力", "MENTAL", "SENSE", "SR", "LOW", true),
    (null, "img_general_skillcard_men-2_043", "大声援", "MENTAL", "SENSE", "SR", "LOW", true),
    (null, "img_general_skillcard_men-2_034", "演出計画", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_038", "願いの力", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_035", "静かな意志", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_036", "始まりの合図", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_040", "意地", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_037", "存在感", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_041", "成功への道筋", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_011", "スポットライト", "MENTAL", "SENSE", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_053", "あふれる思い出", "MENTAL", "LOGIC", "SR", "LOW", true),
    (null, "img_general_skillcard_men-2_055", "ふれあい", "MENTAL", "LOGIC", "SR", "LOW", true),
    (null, "img_general_skillcard_men-2_050", "幸せな時間", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_058", "ファンシーチャーム", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_004", "ワクワクが止まらない", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_054", "本番前夜", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_052", "ひなたぼっこ", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_008", "イメトレ", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_051", "やる気は満点", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_057", "ゆめみごこち", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_056", "止められない想い", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_060", "オトメゴコロ", "MENTAL", "LOGIC", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_064", "潜在能力", "MENTAL", "ANOMALY", "SR", "LOW", true),
    (null, "img_general_skillcard_act-2_073", "カウントダウン", "MENTAL", "ANOMALY", "SR", "LOW", true),
    (null, "img_general_skillcard_men-2_075", "モチベ", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_066", "プライド", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_076", "盛り上げ上手", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_080", "インフルエンサー", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_077", "忍耐力", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_079", "切磋琢磨", "MENTAL", "ANOMALY", "SR", "HIGH", true),
    (null, "img_general_skillcard_men-2_074", "タフネス", "MENTAL", "ANOMALY", "SR", "HIGH", true)
    (null, "img_general_skillcard_men-2_078", ""達成感, "MENTAL", "ANOMALY", "SR", "HIGH", true)`
  console.log(srResult)

  console.log("Inserting SSR card information")
  const ssrResult = await prisma.$executeRaw`INSERT INTO "PCard" ("id", "filename", "name", "type", "plan", "rarity", "cost", "customCharacter") VALUES
    (300, "img_general_skillcard_act-3_030", "コール＆レスポンス", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_031", "バズワード", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_029", "成就", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_010", "魅惑のパフォーマンス", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_049", "至高のエンタメ", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_032", "覚醒", "ACTIVE", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_act-3_001", "200%スマイル", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_038", "開花", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_039", "届いて！", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_050", "輝くキミへ", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_045", "あのときの約束", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_052", "キセキの魔法", "ACTIVE", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_act-3_057", "翔び立て！", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_act-3_054", "総合芸術", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_act-3_056", "心・技・体", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_act-3_053", "輝け！", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_act-3_055", "クライマックス", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_act-3_065", "全身全霊", "ACTIVE", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_men-3_012", "テレビ出演", "MENTAL", "FREE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_011", "叶えたい夢", "MENTAL", "FREE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_003", "アイドル魂", "MENTAL", "FREE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_005", "仕切り直し", "MENTAL", "FREE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_006", "国民的アイドル", "MENTAL", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_036", "魅惑の視線", "MENTAL", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_033", "鳴り止まない拍手", "MENTAL", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_035", "天真爛漫", "MENTAL", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_034", "天賦の才", "MENTAL", "SENSE", "SSR", null, true),
    (null, "img_general_skillcard_men-3_002", "私がスター", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_004", "星屑センセーション", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_041", "ノートの端の決意", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_044", "手書きのメッセージ", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_043", "トキメキ", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_042", "虹色ドリーマー", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_040", "夢色リップ", "MENTAL", "LOGIC", "SSR", null, true),
    (null, "img_general_skillcard_men-3_058", "アイドルになります", "MENTAL", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_men-3_061", "一心不乱", "MENTAL", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_men-3_062", "頂点へ", "MENTAL", "ANOMALY", "SSR", null, true),
    (null, "img_general_skillcard_men-3_063", "覚悟", "MENTAL", "ANOMALY", "SSR", null, true)`
  console.log(ssrResult)

  // Support
  console.log("Inserting support card information")
  const supportResult = await prisma.$executeRaw`INSERT INTO "PCard" ("id", "filename", "name", "type", "plan", "rarity", "cost", "customCharacter", "support") VALUES
    (500, "img_general_skillcard_sup-2_025", "お姉ちゃんだもの！", "ACTIVE", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_026", "おアツイ視線", "MENTAL", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_027", "ご指導ご鞭撻", "ACTIVE", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_028", "ストレッチ談義", "ACTIVE", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_029", "全力サポート", "MENTAL", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_092", "旬の味わい", "ACTIVE", "FREE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_087", "キメ顔で自撮り", "MENTAL", "SENSE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_088", "切れた鼻緒が結んだ絆", "MENTAL", "SENSE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_090", "気になる……", "MENTAL", "SENSE", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_086", "なに聴いてるの？", "ACTIVE", "LOGIC", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_091", "こうかい……？", "ACTIVE", "LOGIC", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_094", "ディテールが肝心", "ACTIVE", "LOGIC", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_095", "草笛ハーモニー", "MENTAL", "LOGIC", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_093", "愛情レインボー", "MENTAL", "ANOMALY", "SR", null, false, true),
    (null, "img_general_skillcard_sup-2_096", "小さなお客さん", "ACTIVE", "ANOMALY", "SR", null, false, true),
    (null, "img_general_skillcard_sup-3_024", "花萌ゆ季節", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_025", "陽だまりの生徒会室", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_026", "心のアルバム", "ACTIVE", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_027", "ティーパーティ", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_046", "光のステージ", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_048", "新生徒会爆誕！", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_037", "薄れゆく壁", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_088", "みずたまりスキップ", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_093", "紅葉ランニング", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_125", "勝負はこれから！", "ACTIVE", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_152", "夏夜に咲く思い出", "ACTIVE", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_155", "月明かりに包まれて", "MENTAL", "FREE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_047", "喧嘩するほど仲がいい", "MENTAL", "SENSE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_090", "はじける水しぶき", "ACTIVE", "SENSE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_091", "交わる感情", "ACTIVE", "SENSE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_095", "光の夜", "MENTAL", "SENSE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_109", "練習再開！", "MENTAL", "SENSE", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_023", "ダメダメクッキング", "MENTAL", "LOGIC", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_089", "お泊り猛勉強", "MENTAL", "LOGIC", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_092", "その本、おもしろい？", "ACTIVE", "LOGIC", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_094", "ほかほか焼き芋", "MENTAL", "LOGIC", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_121", "雨宿りのバス停", "MENTAL", "ANOMALY", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_124", "バレンタイン大作戦！", "MENTAL", "ANOMALY", "SSR", null, false, true),
    (null, "img_general_skillcard_sup-3_126", "対戦お願いします！", "MENTAL", "ANOMALY", "SSR", null, false, true)`
  console.log(supportResult)

  // Trouble
  console.log("Inserting trouble card information")
  const troubleResult = await prisma.$executeRaw`INSERT INTO "PCard" ("id", "filename", "name", "type", "plan", "rarity", "cost", "customCharacter") VALUES
    (900, "img_general_skillcard_acc-0_002", "眠気", "TROUBLE", "FREE", "T", null, false)`
  console.log(troubleResult)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
