
// Приветствие
function welcome() {
    alert("🇰🇷 안녕하세요! Добро пожаловать в Южную Корею!");
}

// Смена темы сайта
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

// Интересные факты
const facts = [
    "🇰🇷 Столица Южной Кореи — Сеул.",
    "🎵 K-pop известен во всём мире.",
    "🍜 Кимчи — традиционное корейское блюдо.",
    "📱 Samsung — известная южнокорейская компания.",
    "🗣️ Корейский алфавит называется хангыль."
];

function showFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[random];
}

// Приветствие при загрузке
console.log("Добро пожаловать на сайт KOREA!");
