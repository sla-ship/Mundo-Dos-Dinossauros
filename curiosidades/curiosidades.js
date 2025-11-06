

const dadosCuriosidades = {
  "tiranossauro-rex": {
    nome: "Tiranossauro Rex",
    imagem: "../img/t-rex.jpg",
    curiosidades: [
      "Viveu há cerca de 68 a 66 milhões de anos.",
      "Podia medir até 12 metros de comprimento.",
      "Seus dentes chegavam a 30 cm.",
      "Tinha braços curtos com dois dedos."
    ]
  },
  "indominus-rex": {
    nome: "Indominus Rex",
    imagem: "../img-hibridos/indominus.png",
    curiosidades: [
      "Criado geneticamente com DNA de vários dinossauros.",
      "Possui camuflagem e inteligência avançada.",
      "Maior que o Tiranossauro Rex.",
      "Extremamente agressivo e imprevisível."
    ]
  },
  "indoraptor": {
    nome: "Indoraptor",
    imagem: "../img-hibridos/indoraptor.png",
    curiosidades: [
      "Combinação de Indominus Rex com Velociraptor.",
      "Ágil, furtivo e altamente inteligente.",
      "Projetado para operações militares.",
      "Reage a comandos sonoros."
    ]
  },
  "scorpios-rex": {
    nome: "Scorpios Rex",
    imagem: "../img-hibridos/scorpios.png",
    curiosidades: [
      "Primeiro híbrido instável criado em laboratório.",
      "Possui ferrões venenosos e comportamento errático.",
      "Extremamente perigoso e imprevisível.",
      "Foi mantido em segredo por anos."
    ]
  },
  "distortus-rex": {
    nome: "Distortus Rex",
    imagem: "../img-hibridos/d-rex.png",
    curiosidades: [
      "Híbrido experimental com mutações instáveis.",
      "Possui aparência distorcida e comportamento imprevisível.",
      "Nunca foi exibido ao público.",
      "Considerado um erro genético."
    ]
  },
  "spinoraptor": {
    nome: "Spinoraptor",
    imagem: "../img-hibridos/spinoraptor.png",
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
    curiosidades: [
      "Mistura de Amargasauro com Spinossauro.",
      "Possui espinhos dorsais e cauda aquática.",
      "Herbívoro com comportamento defensivo.",
      "Criado para diversidade genética."
    ]
  }
};

// Lê o parâmetro da URL
const params = new URLSearchParams(window.location.search);
const dinoId = params.get("dino");

// Atualiza a página com os dados
if (dinoId && dadosCuriosidades[dinoId]) {
  const dino = dadosCuriosidades[dinoId];
  document.getElementById("titulo-dino").textContent = dino.nome;
  document.getElementById("imagem-dino").src = dino.imagem;
  document.getElementById("imagem-dino").alt = dino.nome;

  const lista = document.getElementById("lista-curiosidades");
  dino.curiosidades.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
} else {
  document.getElementById("titulo-dino").textContent = "Dinossauro não encontrado";
}
