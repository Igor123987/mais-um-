// Configuração da data do reencontro
const reunionDate = new Date("2024-12-15"); // Altere para a data desejada
const countdownElement = document.getElementById("countdown");

// Lista de surpresas
const surprises = [
    "Você é o sol que ilumina meu dia! ☀️",
    "Lembre-se: eu te amo mais do que tudo! ❤️",
    "Mal posso esperar para te abraçar de novo! 🤗",
    "Hoje, tire um tempinho para sorrir, porque você é especial! 😊",
    "Eu guardo cada momento com você no meu coração. 💌",
    "Fiz esse projeto com amor, só para você! 🖥️",
    "Cada dia que passa, meu amor por você só cresce. 🌹",
    "Você é a razão do meu sorriso diário. 😘",
    "Contando os dias para te ver novamente! ⏳",
    "Você é minha inspiração e minha força. 💪",
    "Te amo mais do que palavras podem expressar. 💖",
    "Você é a melhor parte do meu dia. 🌞",
    "Não vejo a hora de te abraçar novamente. 🤗",
    "Você é meu amor eterno. 💞",
    "Cada momento com você é inesquecível. 🌟",
    "Você é meu sonho realizado. 🌠",
    "Te amo mais a cada dia. 💕",
    "Você é minha alma gêmea. 💑",
    "Você é meu tudo. 💓",
    "Você é minha felicidade. 😊",
    "Você é meu amor verdadeiro. 💘",
    "Você é minha vida. 🌹",
    "Você é meu coração. ❤️",
];

// Elemento que vai conter as surpresas
const surprisesContainer = document.getElementById("surprises");

// Criar surpresas no DOM
surprises.forEach((message, index) => {
    const div = document.createElement("div");
    div.classList.add("surprise");
    div.id = `surprise-${index}`;
    div.textContent = ` ${message}`;
    surprisesContainer.appendChild(div);
});

// Função para calcular os dias restantes
function updateCountdown() {
    const today = new Date();
    const timeDiff = reunionDate - today;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    countdownElement.textContent = days > 0 ? `${days} dias restantes` : "É hoje! 🎉";

    // Liberar surpresas com base nos dias restantes
    const totalSurprises = surprises.length;
    const surprisesToReveal = totalSurprises - Math.max(days, 0);

    // Revelar apenas uma mensagem por dia
    if (surprisesToReveal > 0) {
        const surprise = document.getElementById(`surprise-${totalSurprises - surprisesToReveal}`);
        if (surprise) surprise.classList.add("revealed");
    }
}

// Atualizar a contagem e revelar surpresas
updateCountdown();
setInterval(updateCountdown, 86400000); // Atualiza a contagem a cada 24 horas
