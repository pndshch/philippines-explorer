const metrics = [
  {
    value: "112.7M",
    label: "2024年7月1日の公式人口",
  },
  {
    value: "7,641",
    label: "島の数として広く案内される数字",
  },
  {
    value: "18",
    label: "行政地域。ルソン8、ビサヤ4、ミンダナオ6",
  },
  {
    value: "PHP",
    label: "通貨はフィリピン・ペソ",
  },
];

const groups = {
  luzon: {
    name: "ルソン",
    short: "Luzon",
    count: "8",
    tone: "政治・経済・火山",
    body: "首都マニラを含む最大の島グループ。中央ルソンの平野、コルディリェラの棚田、ビコールの火山帯まで、国の制度と自然リスクが同じ画面に出てきます。",
    regions: [
      "NCR",
      "CAR",
      "Ilocos",
      "Cagayan Valley",
      "Central Luzon",
      "CALABARZON",
      "MIMAROPA",
      "Bicol",
    ],
    facts: ["首都: Manila", "主な都市: Quezon City", "見どころ: Banaue, Mayon, Intramuros"],
  },
  visayas: {
    name: "ビサヤ",
    short: "Visayas",
    count: "4",
    tone: "海路・祭り・中継点",
    body: "島々が近く、海の移動と地域文化が濃いエリア。セブ、ボホール、イロイロ、レイテなど、交易、宗教、独立運動、台風の記憶が重なります。",
    regions: [
      "Western Visayas",
      "Negros Island Region",
      "Central Visayas",
      "Eastern Visayas",
    ],
    facts: ["主な都市: Cebu City", "祭り: Sinulog, Ati-Atihan", "見どころ: Chocolate Hills, Leyte Gulf"],
  },
  mindanao: {
    name: "ミンダナオ",
    short: "Mindanao",
    count: "6",
    tone: "多文化・農業・自治",
    body: "南部の大きな島グループ。ダバオの都市圏、バンサモロ自治地域、農業と鉱物資源、イスラム文化と先住民文化が並びます。",
    regions: [
      "Zamboanga Peninsula",
      "Northern Mindanao",
      "Davao Region",
      "SOCCSKSARGEN",
      "Caraga",
      "BARMM",
    ],
    facts: ["主な都市: Davao City", "山: Mount Apo", "文化: Moro, Lumad, settler communities"],
  },
};

const lenses = [
  {
    icon: "◌",
    title: "島国として見る",
    body: "フィリピンは国土を道路だけでは読めません。港、空路、台風、海峡が生活圏を決めます。",
    fact: "島の数は 7,641 と案内されることが多い。",
  },
  {
    icon: "言",
    title: "ことばで見る",
    body: "公式言語は Filipino と English。さらに Cebuano, Ilocano, Hiligaynon など地域語が日常を支えます。",
    fact: "多言語社会なので、英語が通じても地域語の存在が重要。",
  },
  {
    icon: "史",
    title: "交易と植民地で見る",
    body: "東南アジア交易、スペイン統治、アメリカ統治、日本占領、独立後の共和国が現在の制度に残っています。",
    fact: "独立記念日は 1898年6月12日の宣言に由来。",
  },
  {
    icon: "食",
    title: "食文化で見る",
    body: "adobo, sinigang, lechon, halo-halo など、酸味、甘味、保存、祝祭の感覚が料理に現れます。",
    fact: "料理名だけでなく、家庭・祭り・地域差を一緒に覚えると強い。",
  },
  {
    icon: "働",
    title: "経済で見る",
    body: "サービス業、BPO、海外送金、製造、観光、農業が組み合わさります。都市の成長と地方の格差も鍵です。",
    fact: "通貨は Philippine peso、中央銀行は BSP。",
  },
  {
    icon: "山",
    title: "自然リスクで見る",
    body: "環太平洋火山帯と台風の通り道に位置し、火山、地震、洪水と共に暮らす国です。",
    fact: "Mayon, Pinatubo, Taal などの火山名はニュース理解にも役立つ。",
  },
];

const phrases = [
  {
    phrase: "Kumusta?",
    reading: "クムスタ",
    meaning: "元気ですか。あいさつの入口。",
    note: "スペイン語 como esta の影響を受けた表現として知られます。",
  },
  {
    phrase: "Salamat",
    reading: "サラマット",
    meaning: "ありがとう。",
    note: "丁寧にするなら Salamat po と言えます。",
  },
  {
    phrase: "Magandang umaga",
    reading: "マガンダン ウマーガ",
    meaning: "おはようございます。",
    note: "maganda は「美しい」。時間帯で後ろが変わります。",
  },
  {
    phrase: "Po / Opo",
    reading: "ポ / オポ",
    meaning: "敬意を添える語 / 丁寧な「はい」。",
    note: "年上の人や初対面でよく使われます。",
  },
  {
    phrase: "Ingat",
    reading: "インガット",
    meaning: "気をつけて。",
    note: "別れ際に自然に使いやすい短い表現です。",
  },
];

const timeline = [
  {
    year: "c. 900",
    event: "ラグナ銅版碑文",
    why: "フィリピン周辺に文字記録と広域交易があったことを示す重要資料。",
  },
  {
    year: "1521",
    event: "マゼラン到達とマクタン",
    why: "ヨーロッパとの接触が始まり、ラプラプの抵抗は国民的記憶になる。",
  },
  {
    year: "1565",
    event: "セブにスペイン拠点",
    why: "スペイン統治、カトリック、ガレオン貿易の時代へ。",
  },
  {
    year: "1896",
    event: "フィリピン革命",
    why: "カティプナンなどの運動が植民地支配への独立運動を加速。",
  },
  {
    year: "1898",
    event: "独立宣言",
    why: "6月12日は現在の独立記念日。直後に米西戦争と米比戦争へ。",
  },
  {
    year: "1946",
    event: "共和国として独立承認",
    why: "第二次世界大戦後、アメリカからの独立が承認される。",
  },
  {
    year: "1986",
    event: "People Power Revolution",
    why: "市民運動による政権交代として世界的に知られる。",
  },
  {
    year: "1991",
    event: "ピナトゥボ噴火",
    why: "20世紀最大級の噴火のひとつ。火山国としてのリスクを象徴。",
  },
  {
    year: "2024",
    event: "人口 112,729,484",
    why: "PSAの2024年人口センサスで公表された公式人口。",
  },
  {
    year: "2026",
    event: "ASEAN議長国",
    why: "地域外交の中心としてフィリピンを見る入口になる年。",
  },
];

const quiz = [
  {
    q: "フィリピンの公式人口として、2024年7月1日のセンサスで発表された数字に最も近いものは？",
    a: ["約8,900万人", "約1億1,270万人", "約1億5,600万人", "約2億人"],
    correct: 1,
    explain: "PSAの2024 Census of Population は 112,729,484 人と発表しています。",
  },
  {
    q: "フィリピンの行政地域は、現在いくつとして覚えるとよい？",
    a: ["12", "15", "18", "31"],
    correct: 2,
    explain: "NCR, CAR, BARMM, NIR などを含め、18地域で整理すると島グループの理解がしやすくなります。",
  },
  {
    q: "公式言語として憲法に記される組み合わせは？",
    a: ["Filipino と English", "Spanish と Filipino", "Cebuano と Tagalog", "English と Japanese"],
    correct: 0,
    explain: "1987年憲法では、communication and instruction のための official languages として Filipino と English が示されています。",
  },
  {
    q: "首都マニラを含む島グループは？",
    a: ["ルソン", "ビサヤ", "ミンダナオ", "スールー諸島"],
    correct: 0,
    explain: "Manila と National Capital Region はルソン側にあります。",
  },
  {
    q: "Cebu, Bohol, Leyte などがある島グループは？",
    a: ["ルソン", "ビサヤ", "ミンダナオ", "パラワンのみ"],
    correct: 1,
    explain: "ビサヤは島々の近さ、海路、祭り、歴史の中継点として覚えると入りやすいです。",
  },
  {
    q: "Davao City や BARMM と結びつきが強い島グループは？",
    a: ["ルソン", "ビサヤ", "ミンダナオ", "バタネス"],
    correct: 2,
    explain: "ミンダナオは南部の大きな島グループで、多文化・自治・農業の視点が重要です。",
  },
  {
    q: "フィリピンの通貨コードは？",
    a: ["PHP", "PHL", "PESO", "PPN"],
    correct: 0,
    explain: "通貨は Philippine peso。国際的な通貨コードは PHP です。",
  },
  {
    q: "1898年6月12日に結びつく出来事は？",
    a: ["People Power Revolution", "独立宣言", "ピナトゥボ噴火", "ASEAN設立"],
    correct: 1,
    explain: "6月12日は独立宣言に由来するフィリピンの独立記念日です。",
  },
  {
    q: "Kumusta? の意味に最も近いものは？",
    a: ["ありがとう", "元気ですか", "気をつけて", "おいしい"],
    correct: 1,
    explain: "Kumusta? は日常のあいさつ。丁寧さを添える語として po もよく使われます。",
  },
  {
    q: "フィリピン理解で「道路だけでなく港と空路も見る」理由は？",
    a: ["内陸国だから", "島国だから", "砂漠が多いから", "鉄道が世界最長だから"],
    correct: 1,
    explain: "多島海国家なので、海峡、港、フェリー、空路が生活圏と経済を大きく左右します。",
  },
];

let activeGroup = "luzon";
let phraseIndex = 0;
let score = 0;
let answered = 0;
let currentQuestion = 0;
let locked = false;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderMetrics() {
  const row = document.getElementById("metricRow");
  row.innerHTML = "";
  metrics.forEach((item) => {
    const box = el("div", "metric");
    box.append(el("strong", null, item.value), el("span", null, item.label));
    row.appendChild(box);
  });
}

function renderGroupSwitch() {
  const switcher = document.getElementById("groupSwitch");
  switcher.innerHTML = "";
  Object.entries(groups).forEach(([key, group]) => {
    const button = el("button", "seg-btn", group.name);
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", key === activeGroup ? "true" : "false");
    button.addEventListener("click", () => {
      activeGroup = key;
      renderGroupSwitch();
      renderGroupCard();
      renderRegions();
    });
    switcher.appendChild(button);
  });
}

function renderGroupCard() {
  const panel = document.querySelector(".map-panel");
  const card = document.getElementById("groupCard");
  const group = groups[activeGroup];
  panel.dataset.active = activeGroup;
  card.innerHTML = "";

  const header = el("div");
  header.append(el("div", "big", group.count), el("h3", null, `${group.name}の地域`));
  const tone = el("span", "chip", group.tone);
  const body = el("p", null, group.body);
  const tags = el("div", "region-tags");
  group.regions.forEach((region) => tags.appendChild(el("span", "chip", region)));
  const mini = el("div", "mini-tags");
  group.facts.forEach((fact) => mini.appendChild(el("span", "chip", fact)));
  card.append(header, tone, body, tags, mini);
}

function renderLenses() {
  const grid = document.getElementById("lensGrid");
  grid.innerHTML = "";
  lenses.forEach((lens) => {
    const card = el("article", "lens-card");
    card.append(
      el("span", "lens-icon", lens.icon),
      el("h3", null, lens.title),
      el("p", null, lens.body),
      el("div", "lens-fact", lens.fact),
    );
    grid.appendChild(card);
  });
}

function renderPhrase() {
  const card = document.getElementById("phraseCard");
  const item = phrases[phraseIndex];
  card.classList.remove("revealed");
  card.innerHTML = "";
  card.append(
    el("div", "phrase-main", item.phrase),
    el("div", "phrase-sub", item.reading),
    el("div", "phrase-meaning", `${item.meaning} ${item.note}`),
  );
}

function renderRegions() {
  const list = document.getElementById("regionList");
  list.innerHTML = "";
  Object.entries(groups).forEach(([key, group]) => {
    const row = el("div", "region-row");
    if (key === activeGroup) row.style.borderColor = "var(--sea)";
    row.append(el("strong", null, group.name));
    const tags = el("div", "region-tags");
    group.regions.forEach((region) => tags.appendChild(el("span", "chip", region)));
    row.appendChild(tags);
    list.appendChild(row);
  });
}

function renderTimeline() {
  const track = document.getElementById("timelineTrack");
  track.innerHTML = "";
  timeline.forEach((item) => {
    const button = el("button", "timeline-btn");
    button.type = "button";
    button.append(
      el("span", "year", item.year),
      el("span", "event", item.event),
      el("span", "why", item.why),
    );
    track.appendChild(button);
  });
}

function updateScore() {
  document.getElementById("scoreText").textContent = `${score} / ${answered}`;
  document.getElementById("quizProgress").value = answered;
}

function renderQuiz() {
  locked = false;
  const card = document.getElementById("quizCard");
  const item = quiz[currentQuestion % quiz.length];
  card.innerHTML = "";
  card.append(el("div", "quiz-kicker", `Question ${answered + 1} / 10`));
  card.append(el("div", "question", item.q));
  const answers = el("div", "answers");
  item.a.forEach((choice, index) => {
    const button = el("button", "answer-btn", choice);
    button.type = "button";
    button.addEventListener("click", () => chooseAnswer(button, index, item));
    answers.appendChild(button);
  });
  card.appendChild(answers);
}

function chooseAnswer(button, index, item) {
  if (locked || answered >= 10) return;
  locked = true;
  const buttons = [...document.querySelectorAll(".answer-btn")];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.correct) btn.classList.add("correct");
  });
  if (index !== item.correct) button.classList.add("wrong");
  if (index === item.correct) score += 1;
  answered += 1;
  updateScore();

  const explain = el("div", "explain", item.explain);
  const row = el("div", "next-row");
  const next = el("button", "primary-btn", answered >= 10 ? "結果を見る" : "次の問題");
  next.type = "button";
  next.addEventListener("click", () => {
    currentQuestion += 1;
    if (answered >= 10) renderResult();
    else renderQuiz();
  });
  row.appendChild(next);
  document.getElementById("quizCard").append(explain, row);
}

function renderResult() {
  const card = document.getElementById("quizCard");
  const title = score >= 8 ? "かなり見えてきました" : score >= 5 ? "輪郭がつかめてきました" : "もう一周で定着します";
  card.innerHTML = "";
  card.append(
    el("div", "quiz-kicker", "Result"),
    el("div", "question", `${score} / 10`),
    el("p", null, title),
  );
  const row = el("div", "next-row");
  const retry = el("button", "primary-btn", "もう一度");
  retry.type = "button";
  retry.addEventListener("click", () => {
    score = 0;
    answered = 0;
    currentQuestion = Math.floor(Math.random() * quiz.length);
    updateScore();
    renderQuiz();
  });
  row.appendChild(retry);
  card.appendChild(row);
}

function bindPhraseControls() {
  document.getElementById("flipPhrase").addEventListener("click", () => {
    document.getElementById("phraseCard").classList.toggle("revealed");
  });
  document.getElementById("prevPhrase").addEventListener("click", () => {
    phraseIndex = (phraseIndex - 1 + phrases.length) % phrases.length;
    renderPhrase();
  });
  document.getElementById("nextPhrase").addEventListener("click", () => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    renderPhrase();
  });
}

function init() {
  currentQuestion = Math.floor(Math.random() * quiz.length);
  renderMetrics();
  renderGroupSwitch();
  renderGroupCard();
  renderLenses();
  renderPhrase();
  renderRegions();
  renderTimeline();
  updateScore();
  renderQuiz();
  bindPhraseControls();
}

init();
