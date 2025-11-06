

const especies = [
  { nome: "Tiranossauro Rex", imagem: "img/t-rex.jpg" },
  { nome: "Triceratops", imagem: "img/triceratops.jpg" },
  { nome: "Velociraptor", imagem: "img/velociraptor.jpg" },
  { nome: "Estegossauro", imagem: "img/estegossauro.jpg" },
  { nome: "Anquilossauro", imagem: "img/anquilossauro.jpg" },
  { nome: "Carnotauro", imagem: "img/carnotauro.png" },
  { nome: "Alossauro", imagem: "img/alossauro.png" },
  { nome: "Braquiossauro", imagem: "img/braquiossauro.jpg" },
  { nome: "Spinossauro", imagem: "img/spinossauro.png" },
  { nome: "Diplodocus", imagem: "img/diplodocus.jpg" }
];

const hibridos = [
  { nome: "Distortus Rex", imagem: "img-hibridos/d-rex.png" },
  { nome: "Indominus Rex", imagem: "img-hibridos/indominus.png" },
  { nome: "Scorpios Rex", imagem: "img-hibridos/scorpios.png" },
  { nome: "Indoraptor", imagem: "img-hibridos/indoraptor.png" },
  { nome: "Spinoraptor", imagem: "img-hibridos/spinoraptor.png" },
  { nome: "Stegoceratops", imagem: "img-hibridos/stegoceratops.png" },
  { nome: "Ankylodocus", imagem: "img-hibridos/ankylodocus.png" },
  { nome: "Spinotasuchus", imagem: "img-hibridos/spinotasuchus.jpg" },
  { nome: "Majundasuchus", imagem: "img-hibridos/majundasuchus.png" },
  { nome: "Amargospinus", imagem: "img-hibridos/amargospinus.jpg" }
];

function criarCard(dino, destino) {
  const nomeFormatado = dino.nome.toLowerCase().replace(/\s+/g, "-");
  const card = document.createElement("div");
  card.className = "card";
  card.style.cursor = "pointer";
  card.innerHTML = `<img src="${dino.imagem}" alt="${dino.nome}" /><h3>${dino.nome}</h3>`;
  card.onclick = () => {
    window.location.href = `curiosidades/curiosidades.html?dino=${nomeFormatado}`;
  };
  destino.appendChild(card);
}

const galeria = document.getElementById("galeria-dinossauros");
if (galeria) especies.forEach(dino => criarCard(dino, galeria));

const hibrido = document.getElementById("hibrido-dinossauros");
if (hibrido) hibridos.forEach(dino => criarCard(dino, hibrido));
