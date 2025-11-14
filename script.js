

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
