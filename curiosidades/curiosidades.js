// const dadosCuriosidades = {
//   "tiranossauro-rex": {
//     nome: "Tiranossauro Rex",
//     imagem: "../img/t-rex.jpg",
//     video: "https://www.youtube.com/embed/Rc_i5TKdmhs", // exemplo
//     curiosidades: [
//       "Viveu há cerca de 68 a 66 milhões de anos.",
//       "Podia medir até 12 metros de comprimento.",
//       "Seus dentes chegavam a 30 cm.",
//       "Tinha braços curtos com dois dedos."
//     ]
//   },
//   "triceratops": {
//     nome: "Triceratops",
//     imagem: "../img/triceratops.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_TRICERATOPS",
//     curiosidades: [
//       "Tinha três chifres e uma gola óssea.",
//       "Era herbívoro e vivia em manadas.",
//       "Pesava cerca de 6 a 12 toneladas.",
//       "Usava os chifres para defesa."
//     ]
//   },
//   "velociraptor": {
//     nome: "Velociraptor",
//     imagem: "../img/velociraptor.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_VELOCIRAPTOR",
//     curiosidades: [
//       "Media cerca de 2 metros de comprimento.",
//       "Era ágil e inteligente.",
//       "Possuía garras curvas e afiadas.",
//       "Provavelmente tinha penas."
//     ]
//   },
//   "estegossauro": {
//     nome: "Estegossauro",
//     imagem: "../img/estegossauro.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_ESTEGOSSAURO",
//     curiosidades: [
//       "Tinha placas ósseas ao longo das costas.",
//       "Possuía espinhos na cauda para defesa.",
//       "Era herbívoro e lento.",
//       "Viveu no período Jurássico."
//     ]
//   },
//   "anquilossauro": {
//     nome: "Anquilossauro",
//     imagem: "../img/anquilossauro.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_ANQUILOSSAURO",
//     curiosidades: [
//       "Corpo blindado com placas ósseas.",
//       "Cauda com clava para defesa.",
//       "Herbívoro resistente.",
//       "Viveu no final do período Cretáceo."
//     ]
//   },
//   "carnotauro": {
//     nome: "Carnotauro",
//     imagem: "../img/carnotauro.png",
//     video: "https://www.youtube.com/embed/VIDEO_ID_CARNOTAURO",
//     curiosidades: [
//       "Tinha chifres curtos acima dos olhos.",
//       "Braços extremamente pequenos.",
//       "Era carnívoro e ágil.",
//       "Viveu na América do Sul."
//     ]
//   },
//   "alossauro": {
//     nome: "Alossauro",
//     imagem: "../img/alossauro.png",
//     video: "https://www.youtube.com/embed/VIDEO_ID_ALOSSAURO",
//     curiosidades: [
//       "Predador do período Jurássico.",
//       "Tinha mandíbulas fortes e dentes afiados.",
//       "Mais leve que o T. rex.",
//       "Caçava em grupo."
//     ]
//   },
//   "braquiossauro": {
//     nome: "Braquiossauro",
//     imagem: "../img/braquiossauro.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_BRAQUIOSSAURO",
//     curiosidades: [
//       "Pescoço longo para alcançar folhas altas.",
//       "Herbívoro gigante.",
//       "Viveu no período Jurássico.",
//       "Tinha patas dianteiras maiores que as traseiras."
//     ]
//   },
//   "spinossauro": {
//     nome: "Spinossauro",
//     imagem: "../img/spinossauro.png",
//     video: "https://www.youtube.com/embed/VIDEO_ID_SPINOSSAURO",
//     curiosidades: [
//       "Possuía uma vela nas costas.",
//       "Viveu em ambientes aquáticos.",
//       "Maior que o T. rex.",
//       "Caçava peixes e pequenos animais."
//     ]
//   },
//   "diplodocus": {
//     nome: "Diplodocus",
//     imagem: "../img/diplodocus.jpg",
//     video: "https://www.youtube.com/embed/VIDEO_ID_DIPLODOCUS",
//     curiosidades: [
//       "Pescoço e cauda extremamente longos.",
//       "Herbívoro pacífico.",
//       "Viveu no período Jurássico.",
//       "Um dos dinossauros mais compridos já descobertos."
//     ]
//   },
//   // Híbridos abaixo (mesma lógica: adicionar campo video)
//   "indominus-rex": {
//     nome: "Indominus Rex",
//     imagem: "../img-hibridos/indominus.png",
//     video: "https://www.youtube.com/embed/VIDEO_ID_INDOMINUS",
//     curiosidades: [
//       "Criado geneticamente com DNA de vários dinossauros.",
//       "Possui camuflagem e inteligência avançada.",
//       "Maior que o Tiranossauro Rex.",
//       "Extremamente agressivo e imprevisível."
//     ]
//   },
//   // ... repita para os demais híbridos
// };

// // Lê o parâmetro da URL
// const params = new URLSearchParams(window.location.search);
// const dinoId = params.get("dino");

// // Atualiza a página com os dados
// if (dinoId && dadosCuriosidades[dinoId]) {
//   const dino = dadosCuriosidades[dinoId];
//   document.getElementById("titulo-dino").textContent = dino.nome;
//   document.getElementById("imagem-dino").src = dino.imagem;
//   document.getElementById("imagem-dino").alt = dino.nome;

//   // Atualiza vídeo
//   if (dino.video) {
//     document.getElementById("video-dino").src = dino.video;
//   }

//   // Atualiza lista de curiosidades
//   const lista = document.getElementById("lista-curiosidades");
//   dino.curiosidades.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     lista.appendChild(li);
//   });
// } else {
//   document.getElementById("titulo-dino").textContent = "Dinossauro não encontrado";
// }

// curiosidades.js — completo (10 espécies + 10 híbridos), com suporte a vídeo

const dadosCuriosidades = {
  // ===== ESPÉCIES =====
  "tiranossauro-rex": {
    nome: "Tiranossauro Rex",
    imagem: "../img/t-rex.jpg",
    video: "https://www.youtube.com/embed/Rc_i5TKdmhs", // Exemplo clássico do T. rex
    curiosidades: [
      "Viveu há cerca de 68 a 66 milhões de anos.",
      "Podia medir até 12 metros de comprimento.",
      "Seus dentes chegavam a 30 cm.",
      "Tinha braços curtos com dois dedos."
    ]
  },
  "triceratops": {
    nome: "Triceratops",
    imagem: "../img/triceratops.jpg",
    video: "https://www.youtube.com/embed/tYm7xeg27Rw",
    curiosidades: [
      "Tinha três chifres e uma gola óssea.",
      "Era herbívoro e vivia em manadas.",
      "Pesava cerca de 6 a 12 toneladas.",
      "Usava os chifres para defesa."
    ]
  },
  "velociraptor": {
    nome: "Velociraptor",
    imagem: "../img/velociraptor.jpg",
    video: "https://www.youtube.com/embed/WCrmkX35Xks",
    curiosidades: [
      "Media cerca de 2 metros de comprimento.",
      "Era ágil e inteligente.",
      "Possuía garras curvas e afiadas.",
      "Provavelmente tinha penas."
    ]
  },
  "estegossauro": {
    nome: "Estegossauro",
    imagem: "../img/estegossauro.jpg",
    video: "https://www.youtube.com/embed/nV03c_m8Su8",
    curiosidades: [
      "Tinha placas ósseas ao longo das costas.",
      "Possuía espinhos na cauda para defesa.",
      "Era herbívoro e lento.",
      "Viveu no período Jurássico."
    ]
  },
  "anquilossauro": {
    nome: "Anquilossauro",
    imagem: "../img/anquilossauro.jpg",
    video: "https://www.youtube.com/embed/Fwa0DjFMTm4",
    curiosidades: [
      "Corpo blindado com placas ósseas.",
      "Cauda com clava para defesa.",
      "Herbívoro resistente.",
      "Viveu no final do período Cretáceo."
    ]
  },
  "carnotauro": {
    nome: "Carnotauro",
    imagem: "../img/carnotauro.png",
    video: "https://www.youtube.com/embed/qRCBG2fpxRg",
    curiosidades: [
      "Tinha chifres curtos acima dos olhos.",
      "Braços extremamente pequenos.",
      "Era carnívoro e ágil.",
      "Viveu na América do Sul."
    ]
  },
  "alossauro": {
    nome: "Alossauro",
    imagem: "../img/alossauro.png",
    video: "https://www.youtube.com/embed/Lk_OeC-o80g",
    curiosidades: [
      "Predador do período Jurássico.",
      "Tinha mandíbulas fortes e dentes afiados.",
      "Mais leve que o T. rex.",
      "Caçava em grupo."
    ]
  },
  "braquiossauro": {
    nome: "Braquiossauro",
    imagem: "../img/braquiossauro.jpg",
    video: "https://www.youtube.com/embed/9kV0J0kc1QM",
    curiosidades: [
      "Pescoço longo para alcançar folhas altas.",
      "Herbívoro gigante.",
      "Viveu no período Jurássico.",
      "Tinha patas dianteiras maiores que as traseiras."
    ]
  },
  "spinossauro": {
    nome: "Spinossauro",
    imagem: "../img/spinossauro.png",
    video: "https://www.youtube.com/embed/A-Zq-Me7Zm4",
    curiosidades: [
      "Possuía uma vela nas costas.",
      "Viveu em ambientes aquáticos.",
      "Maior que o T. rex.",
      "Caçava peixes e pequenos animais."
    ]
  },
  "diplodocus": {
    nome: "Diplodocus",
    imagem: "../img/diplodocus.jpg",
    video: "https://www.youtube.com/embed/2y2sEUl3my8",
    curiosidades: [
      "Pescoço e cauda extremamente longos.",
      "Herbívoro pacífico.",
      "Viveu no período Jurássico.",
      "Um dos dinossauros mais compridos já descobertos."
    ]
  },

  // ===== HÍBRIDOS =====
  "distortus-rex": {
    nome: "Distortus Rex",
    imagem: "../img-hibridos/d-rex.png",
    video: "https://www.youtube.com/embed/comnbmvD8jY",
    curiosidades: [
      "Híbrido experimental com mutações instáveis.",
      "Possui aparência distorcida e comportamento imprevisível.",
      "Nunca foi exibido ao público.",
      "Considerado um erro genético."
    ]
  },
  "indominus-rex": {
    nome: "Indominus Rex",
    imagem: "../img-hibridos/indominus.png",
    video: "https://www.youtube.com/embed/dDwYtjdSHWk",
    curiosidades: [
      "Criado geneticamente com DNA de vários dinossauros.",
      "Possui camuflagem e inteligência avançada.",
      "Maior que o Tiranossauro Rex.",
      "Extremamente agressivo e imprevisível."
    ]
  },
  "scorpios-rex": {
    nome: "Scorpios Rex",
    imagem: "../img-hibridos/scorpios.png",
    video: "https://www.youtube.com/embed/eI6VSXG288A",
    curiosidades: [
      "Primeiro híbrido instável criado em laboratório.",
      "Possui ferrões venenosos e comportamento errático.",
      "Extremamente perigoso e imprevisível.",
      "Foi mantido em segredo por anos."
    ]
  },
  "indoraptor": {
    nome: "Indoraptor",
    imagem: "../img-hibridos/indoraptor.png",
    video: "https://www.youtube.com/embed/DoDD5KtCVf4",
    curiosidades: [
      "Combinação de Indominus Rex com Velociraptor.",
      "Ágil, furtivo e altamente inteligente.",
      "Projetado para operações militares.",
      "Reage a comandos sonoros."
    ]
  },
  "spinoraptor": {
    nome: "Spinoraptor",
    imagem: "../img-hibridos/spinoraptor.png",
    video: "https://www.youtube.com/embed/ZwP05ewh4Jg",
    curiosidades: [
      "Combinação de Spinossauro com Velociraptor.",
      "Ágil e adaptado para ambientes aquáticos.",
      "Possui garras afiadas e dentes curvos.",
      "Excelente caçador em grupo."
    ]
  },
  "stegoceratops": {
    nome: "Stegoceratops",
    imagem: "../img-hibridos/stegoceratops.png",
    video: "https://www.youtube.com/embed/BgzCbV-JXVI",
    curiosidades: [
      "Mistura de Estegossauro com Triceratops.",
      "Possui placas dorsais e três chifres frontais.",
      "Herbívoro com defesa poderosa.",
      "Criado para exibição em parque temático."
    ]
  },
  "ankylodocus": {
    nome: "Ankylodocus",
    imagem: "../img-hibridos/ankylodocus.png",
    video: "https://www.youtube.com/embed/Ya07p6AwnRo",
    curiosidades: [
      "Combinação de Anquilossauro com Diplodocus.",
      "Corpo blindado com cauda longa.",
      "Herbívoro resistente e pacífico.",
      "Criado para estudos de comportamento."
    ]
  },
  "spinotasuchus": {
    nome: "Spinotasuchus",
    imagem: "../img-hibridos/spinotasuchus.jpg",
    video: "https://www.youtube.com/embed/kXNLnZf-FmA",
    curiosidades: [
      "Mistura de Spinossauro com Postosuchus.",
      "Possui mandíbula poderosa e postura semiaquática.",
      "Extremamente territorial.",
      "Criado para testes de adaptação."
    ]
  },
  "majundasuchus": {
    nome: "Majundasuchus",
    imagem: "../img-hibridos/majundasuchus.png",
    video: "https://www.youtube.com/embed/6YRCEBMASwo",
    curiosidades: [
      "Combinação de Majungasauro com Postosuchus.",
      "Predador ágil e agressivo.",
      "Possui mordida destrutiva.",
      "Criado para simulações de combate."
    ]
  },
  "amargospinus": {
    nome: "Amargospinus",
    imagem: "../img-hibridos/amargospinus.jpg",
    video: "https://www.youtube.com/embed/tZeJiUcRbGY", // Vídeo popular sobre Amargospinus
    curiosidades: [
      "Mistura de Amargasauro com Spinossauro.",
      "Possui espinhos dorsais e cauda aquática.",
      "Herbívoro com comportamento defensivo.",
      "Criado para diversidade genética."
    ]
  }
};

// ===== Lógica de carregamento =====

// Lê o parâmetro da URL
const params = new URLSearchParams(window.location.search);
const dinoId = params.get("dino");

// Seletores
const tituloEl = document.getElementById("titulo-dino");
const imagemEl = document.getElementById("imagem-dino");
const videoEl = document.getElementById("video-dino");
const listaEl = document.getElementById("lista-curiosidades");

if (dinoId && dadosCuriosidades[dinoId]) {
  const dino = dadosCuriosidades[dinoId];

  // Título
  tituloEl.textContent = dino.nome;

  // Imagem
  imagemEl.src = dino.imagem;
  imagemEl.alt = dino.nome;

  // Vídeo (embed YouTube)
  if (dino.video && videoEl) {
    videoEl.src = dino.video;
  }

  // Lista de curiosidades
  dino.curiosidades.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaEl.appendChild(li);
  });
} else {
  tituloEl.textContent = "Dinossauro não encontrado";
  if (imagemEl) imagemEl.remove();
  if (videoEl) videoEl.remove();
}
