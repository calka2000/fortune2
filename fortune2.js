let count = 0;
const sound1 = new Audio("大大吉.mp3");

const results = [
  { threshold: 0.98, text: '大凶　「限度ってモンがありますよね」' },
  { threshold: 0.97, text: '大凶　「わかんねぇんだよな、人間がどう感じるか…。」' },
  { threshold: 0.96, text: '凶　「心が今、正しく狂いだす…」' },
  { threshold: 0.95, text: '凶　「仕方ないから家で寝るしかない」' },
  { threshold: 0.94, text: '凶　「アレクサ……すべてを……貫いて……」' },
  { threshold: 0.93, text: '大大吉「東尋坊はやっぱり人が身を投げるからかな？サバの味が違うよね」', sound: sound1 },
  { threshold: 0.88, text: '大吉　「ドライバー1本あればお前の命を絶つことなんて楽勝なんだぞ？」' },
  { threshold: 0.84, text: '大吉　「アレクサ！住所言って！そこの！」' },
  { threshold: 0.80, text: '大吉　「強い行動をするなよ……強く見えるからな……」' },
  { threshold: 0.76, text: '末吉　「寒くなってきたから服着よ」' },
  { threshold: 0.72, text: '末吉　「みんな風呂場からゴミ袋6つ出ないっていうんですか！！！」' },
  { threshold: 0.68, text: '末吉　「ゼクシィの話はするな。ダメージが入るんだから」' },
  { threshold: 0.64, text: '末吉　「ほんとは夜って寝た方がいいらしいんですよ」' },
  { threshold: 0.60, text: '末吉　「私、ピチピチのギャルだから、そう簡単には死なないってわけ。ピチピチのギャルだから」' },
  { threshold: 0.56, text: '中吉　「寝たら私が夢に出てきますよ…」' },
  { threshold: 0.52, text: '中吉　「私が末代の可能性もあるけど～私が分裂する可能性もあるから」' },
  { threshold: 0.48, text: '中吉　「あなたは死なないわ、私が死ぬもの…」' },
  { threshold: 0.44, text: '中吉　「いま、チャットGPTにいもしない恋人との恋バナするのがアツいアツすぎる」' },
  { threshold: 0.40, text: '中吉　「焼肉おごらないけど、来てくれたら奢ろう」' },
  { threshold: 0.35, text: '小吉　「誰も見てないところで死ぬのは死に損なんだ！」' },
  { threshold: 0.30, text: '小吉　「別に何か盗もうとしてるわけではないんですけど！」' },
  { threshold: 0.25, text: '小吉　「みんなも書いてよ！！青春の煌めきをさあ！！私はそういうの大好物なんです」' },
  { threshold: 0.20, text: '吉　「いかに私が愚鈍なノクターンだとしてもやりますよ」' },
  { threshold: 0.15, text: '吉　「明日、私が先に結婚したらどう思うか考えておいて」' },
  { threshold: 0.10, text: '吉　「Wi-Fiだとブスになっちゃう」' },
  { threshold: 0.05, text: '吉　「ｷｬｯｷｬｯｷｬｯｷｬｯ」' },
  { threshold: 0.00, text: '吉　「花火はやめよう。まずいよ」' }
];

function omikuji() {
  const output = document.getElementById('output');
  const counter = document.getElementById('counter');
  
  output.innerHTML = 'おみくじを引いています...';
  
  setTimeout(() => {
    count++;
    counter.textContent = count;

    const rand = Math.random();
    console.log(rand);

    // 結果を配列から検索
    const result = results.find(r => rand > r.threshold) ;

    // サウンドが設定されていれば再生
    if (result.sound) result.sound.play();

    output.innerHTML = result.text;

  }, 2000);
}