// 1. CREATE RUNGS - BIG HELIX
const helix = document.getElementById('helix');
for (let i = 1; i <= 18; i++) {
  let rung = document.createElement('div');
  rung.className = 'rung';
  rung.style.setProperty('--i', i);
  helix.appendChild(rung);
}

// 2. SMALL HELIX - STRUCTURE SECTION
const helix2 = document.getElementById('helix2');
for (let i = 1; i <= 12; i++) {
  let rung = document.createElement('div');
  rung.className = 'rung';
  rung.style.setProperty('--i', i);
  helix2.appendChild(rung);
}

// 3. PAUSE / PLAY BUTTON
const speedBtn = document.getElementById('speedBtn');
let isPaused = false;
speedBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  document.querySelectorAll('.helix').forEach(h => {
    if (isPaused) h.classList.add('paused');
    else h.classList.remove('paused');
  });
  speedBtn.textContent = isPaused ? "PLAY ANIMATION" : "PAUSE ANIMATION";
});

// 4. BASES INFO ON CLICK
const basesData = {
  A: { title: "A - Adenine", desc: "Adenine always pairs with Thymine (T). This is the strongest pairing in DNA. Adenine is about 30% of your DNA." },
  T: { title: "T - Thymine", desc: "Thymine is found only in DNA, not in RNA. It always pairs with Adenine (A) with 2 Hydrogen Bonds." },
  G: { title: "G - Guanine", desc: "Guanine always pairs with Cytosine (C). It connects with 3 Hydrogen Bonds, so it is stronger." },
  C: { title: "C - Cytosine", desc: "Cytosine always pairs with Guanine (G). It keeps the DNA code stable." }
};

document.querySelectorAll('.base-card').forEach(card => {
  card.addEventListener('click', () => {
    let key = card.getAttribute('data-base');
    document.getElementById('baseTitle').textContent = basesData[key].title;
    document.getElementById('baseDesc').textContent = basesData[key].desc;
    document.querySelectorAll('.base-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// 5. FUN FACTS
const facts = [
  "If you take out all the DNA from your body and straighten it, it could go to the Sun and back 60 times!",
  "Your DNA is 99.9% same as every other human. Only 0.1% makes you UNIQUE!",
  "If even one letter in DNA is wrong, it can cause disease. That is why your body repairs it every day.",
  "Banana DNA is 60% similar to human DNA!",
  "The DNA in one of your cells is 2 meters long, but it is folded so small that you cannot see it with your eyes."
];
let factIndex = 0;
document.getElementById('factBtn').addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  document.getElementById('factText').textContent = facts[factIndex];
});

// 6. MENU
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('show');
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    a.classList.add('active');
  });
});

// 7. FORM
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('successMsg').style.display = "block";
  e.target.reset();
});