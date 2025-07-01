const perguntas = [
  {
    texto: "1. Essa posição é a:",
    imagem: "imgs/1ªposiçãopés.png",
    alternativas: ["Quinta posição de pés", "Quarta posição de pés", "Primeira posição de pés", "Segunda posição de pés"],
    correta: 2
  },
  {
    texto: "2. Esse movimento é o:",
    imagem: "/battementtendudevant.webp",
    alternativas: ["Battement jeté a la second", "Battement tendu devant", "Battement jeté derriére", "Battement tendu derriére"],
    correta: 1
  },
  {
    texto: "3. O que significa 'En dehors'?",
    imagem: "/coupé.webp",
    alternativas: ["Preparatória", "Para dentro", "Saltar", "Para fora"],
    correta: 3
  },
 {
    texto: "4. Esse movimento é o:",
    imagem: "/demiplié2.png",
    alternativas: ["Demi plié", "Battement tendu devant", "Grand plié", "Battement tendu derriére"],
    correta: 0
  },

  {
    texto: "5. Qual é o nome desse movimento?",
    imagem: "/passé.jpg",
    alternativas: ["Relevé", "Cambré", "Assemblé", "Passé"],
    correta: 3
  },
  /*{
    texto: "5. Qual é o nome desse movimento?",
    imagem: "",
    alternativas: ["Um giro", "Flexão de costas", "Flexão de joelhos", "Esticar as pontas"],
    correta: 2
  },
    {
    texto: "6. O que é 'Sauté' ?",
    imagem: "imgs/degas1.jpg",
    alternativas: ["Uma posição de braços", "Esticar as pontas", "Um salto", "Caminhar na meia ponta"],
    correta: 2
  },
      {
    texto: "7. O que é 'Relevé' ?",
    imagem: "imgs/degas1.jpg",
    alternativas: ["Um salto", "Subir na meia ponta", "Uma reverência", "Um posição de braços"],
    correta: 1
  },
        {
    texto: "8. O que são 'Pantomimas' ?",
    imagem: "imgs/degas1.jpg",
      alternativas: ["Piruetas duplas", "1ª posição aberta", "Conjunto de bailarinas", "Mímicas"],
    correta: 3
  },
          {
    texto: "9. O movimento que desliza o pé pelo chão até a ponta dos dedos se chama: ",
    imagem: "imgs/degas1.jpg",
      alternativas: ["Battement tendu", "1ª posição fechada", "Pantomimas", "Galop"],
    correta: 0
  },
            {
    texto: "10. O movimento que lança a perna rápido e desce devagar se chama: ",
    imagem: "imgs/degas1.jpg",
      alternativas: ["Battement soutenu", "Grand Plié", "Grand battement", "Echappé"],
    correta: 2
  }*/
  
];


let tempo = 0;
let acertos = 0;
let perguntaAtual = 0;
const timer = setInterval(() => {
  tempo++;
  document.getElementById("timer").textContent = `⏱ Tempo: ${tempo}s`;
}, 1000);

const audioAcerto = new Audio("acerto.mp3");
const audioErro = new Audio("erro.mp3");

function carregarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (perguntaAtual >= perguntas.length) {
    clearInterval(timer);
    document.getElementById("resultado").innerText = `Você acertou ${acertos} de ${perguntas.length} em ${tempo}s.`;
    return;
  }

  const p = perguntas[perguntaAtual];

  const div = document.createElement("div");
  div.classList.add("pergunta");

  div.innerHTML = `
    <p>${p.texto}</p>
    <img src="${p.imagem}" alt="Imagem da pergunta">
    <div class="alternativas">
      ${p.alternativas.map((alt, i) => `
        <div class="botao" onclick="responder(${i})">${alt}</div>
      `).join("")}
    </div>
  `;

  container.appendChild(div);
}



function responder(indice) {
  const correta = perguntas[perguntaAtual].correta;
  if (indice === correta) {
    acertos++;
    audioAcerto.play();
  } else {
    audioErro.play();
  }
  perguntaAtual++;
  setTimeout(carregarPergunta, 500);
}

window.onload = carregarPergunta;
