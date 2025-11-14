// ==== PLAYER Barca====
const players = [
  { no: 1, name: "Marc-André ter Stegen", position: "Goalkeeper", img: "players/terstegen.jpg" },
  { no: 3, name: "Alejandro Balde", position: "Defender", img: "players/balde.jpg" },
  { no: 4, name: "Ronald Araújo", position: "Defender", img: "players/araujo.jpg" },
  { no: 5, name: "Pau Cubarsí", position: "Defender", img: "players/cubarsi.jpg" },
  { no: 6, name: "Gavi", position: "Midfielder", img: "players/gavi.jpg" },
  { no: 7, name: "Ferran Torres", position: "Forward", img: "players/ferran.jpg" },
  { no: 8, name: "Pedri González", position: "Midfielder", img: "players/pedri.jpg" },
  { no: 9, name: "Robert Lewandowski", position: "Forward", img: "players/lewandowski.jpg" },
  { no: 10, name: "Lamine Yamal", position: "Forward", img: "players/yamal.jpg" },
  { no: 11, name: "Raphinha", position: "Forward", img: "players/raphinha.jpg" },
  { no: 13, name: "Joan García", position: "Goalkeeper", img: "players/joan.jpg" },
  { no: 14, name: "Marcus Rashford", position: "Forward", img: "players/rashford.jpg" },
  { no: 16, name: "Fermín López", position: "Midfielder", img: "players/fermin.jpg" },
  { no: 17, name: "Marc Casadó", position: "Midfielder", img: "players/casado.jpg" },
  { no: 21, name: "Frenkie de Jong", position: "Midfielder", img: "players/dejong.jpg" },
  { no: 23, name: "Jules Koundé", position: "Defender", img: "players/kounde.jpg" }
];

// ==== SHOP DATA ====
const shopItems = [
  { title: "Home Jersey 2025/26", price: "€89.99", img: "shop/jersey1.jpg" },
  { title: "Away Jersey 2025/26", price: "€89.99", img: "shop/jersey2.jpg" },
  { title: "Third Jersey 2025/26", price: "€89.99", img: "shop/jersey3.jpg" },
  { title: "Goalkeeper Jersey 2025/26", price: "€89.99", img: "shop/jersey4.jpg" }
];

// ==== MATCH DATA ====
const matches = [
  { opponent: "Real Madrid", date: "Oct 20, 2025", score: "3 - 1", result: "win", img: "matches/match1.jpg", mvp:"Pedri", rating:"9.1", goals:1, assists:1 },
  { opponent: "Atletico Madrid", date: "Oct 26, 2025", score: "2 - 2", result: "draw", img: "matches/match2.jpg", mvp:"Lewandowski", rating:"8.5", goals:2, assists:0 },
  { opponent: "Sevilla", date: "Oct 31, 2025", score: "1 - 0", result: "win", img: "matches/match3.jpg", mvp:"Ter Stegen", rating:"8.9", goals:0, assists:0 },
  { opponent: "Sevilla", date: "Oct 31, 2025", score: "1 - 0", result: "win", img: "matches/match4.jpg", mvp:"Ter Stegen", rating:"8.9", goals:0, assists:0 },
  { opponent: "Sevilla", date: "Oct 31, 2025", score: "1 - 0", result: "win", img: "matches/match5.jpg", mvp:"Ter Stegen", rating:"8.9", goals:0, assists:0 },
    { opponent: "Sevilla", date: "Oct 31, 2025", score: "1 - 0", result: "win", img: "matches/match6.jpg", mvp:"Ter Stegen", rating:"8.9", goals:0, assists:0 }
];

// ==== NEWS DATA ====
const news = [
  { 
    title: "Barça secure another dominant home win", 
    img: "news/news1.jpg",
    date: "November 2, 2025"
  },
  { 
    title: "Pedri extends contract until 2030", 
    img: "news/news2.jpg",
    date: "October 30, 2025"
  },
  { 
    title: "Balde are back", 
    img: "news/news3.jpg",
    date: "October 25, 2025"
  },
  { 
    title: "Pedri potter did it again", 
    img: "news/news4.jpg",
    date: "October 21, 2025"
  },
  { 
    title: "Hansi Flick mad", 
    img: "news/news5.jpg",
    date: "October 15, 2025"
  },
  { 
    title: "Nico Williams wants to join Barcelona", 
    img: "news/news6.jpg",
    date: "October 10, 2025"
  }
];

// ==== RENDER NEWS SECTION ====
const newsSlider = document.querySelector(".news-slider");
news.forEach(n => {
  const card = document.createElement("div");
  card.className = "news-card";
  card.innerHTML = `
    <img src="assets/images/${n.img}" alt="${n.title}">
    <div class="news-body">
      <h4>${n.title}</h4>
      <span class="news-date">${n.date}</span>
    </div>
  `;
  newsSlider.appendChild(card);
});



// ==== MESSI SLIDES ====
const messiSlides = [
  {
    img: "messi/msn.jpg",
    title: "Messi 2015 — MSN Dominates Europe",
    desc: "The unstoppable trio: Messi, Suárez, and Neymar conquered Europe in unstoppable fashion, securing the treble once again.."
  },
  {
    img: "messi/messi2.jpg",
    title: "Messi 2009 — The Treble Season",
    desc: "Led Barcelona to their first ever treble under Pep Guardiola."
  },
  {
    img: "messi/messi3.jpg",
    title: "Messi 2011 — Wembley Brilliance",
    desc: "Destroyed Manchester United and sealed one of the most dominant finals in UCL history."
  },
  {
    img: "messi/messi4.jpg",
    title: "Messi 2012 — 91 Goals in a Calendar Year",
    desc: "An otherworldly record that may never be broken — 91 goals in 2012, redefining greatness and rewriting football history."
  },
  {
    img: "messi/messi5.jpg",
    title: "Messi 2017 — The Bernabéu Silence",
    desc: "Minute 92: he takes off his shirt and holds it high to the Madrid fans. Iconic. 3–2. Eternal. The King of El Clásico."
  },
  {
    img: "messi/messi6.jpg",
    title: "Messi 2019 — The Anfield Miracle That Wasn't",
    desc: "Captain. Leader. One-man army. Despite heartbreak, his free-kick vs Liverpool remains one of his greatest masterpieces."
  },
  {
    img: "messi/messi7.jpg",
    title: "Messi 2022 — World Champion",
    desc: "Once Blaugrana, always Blaugrana. The boy from Rosario fulfilled his destiny — leading Argentina to World Cup glory in Qatar."
  },
  {
    img: "messi/messi8.jpg",
    title: "Messi Farewell — Gracias Capitán",
    desc: "An emotional goodbye to the greatest ever to wear the Blaugrana. Legends never truly leave — they live forever in our hearts."
  }
];

let messiIndex = 0;
const messiImg = document.getElementById("messiImage");
const messiTitle = document.getElementById("messiTitle");
const messiDesc = document.getElementById("messiDesc");

function changeMessi() {
  messiIndex = (messiIndex + 1) % messiSlides.length;
  const slide = messiSlides[messiIndex];
  messiImg.style.opacity = 0;
  setTimeout(() => {
    messiImg.src = "assets/images/" + slide.img;
    messiTitle.textContent = slide.title;
    messiDesc.textContent = slide.desc;
    messiImg.style.opacity = 1;
  }, 500);
}

// Auto slide every 6 seconds
setInterval(changeMessi, 6000);


// ==== RENDER PLAYERS ====
const playerSlider = document.querySelector(".player-slider");
playerSlider.innerHTML = players.map(p => `
  <div class="player-card">
    <img src="assets/images/${p.img}" alt="${p.name}">
    <div class="overlay">
      <h3>${p.name}</h3>
      <p>${p.position}</p>
      <p class="no">#${p.no}</p>
    </div>
  </div>
`).join("");

// ==== RENDER SHOP ====
const shopGrid = document.querySelector(".shop-grid");
shopGrid.innerHTML = shopItems.map(s => `
  <div class="shop-item">
    <img src="assets/images/${s.img}" alt="${s.title}">
    <h4>${s.title}</h4>
    <p>${s.price}</p>
    <button>Buy Now</button>
  </div>
`).join("");

// ==== RENDER MATCHES ====
// ==== RENDER MATCHES (HORIZONTAL SLIDER, SAME SIZE) ====
const matchSlider = document.querySelector(".matches-slider");
matchSlider.innerHTML = matches.map(m => `
  <div class="match-card ${m.result}">
    <img src="assets/images/${m.img}">
    <div class="match-popup">
      MVP: ${m.mvp}<br>
      Rating: ${m.rating}<br>
      Goals: ${m.goals}, Assists: ${m.assists}
    </div>
    <div class="match-info">
      <h4>${m.opponent}</h4>
      <p>${m.date}</p>
      <p>Score: ${m.score}</p>
    </div>
  </div>
`).join("");
