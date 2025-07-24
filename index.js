// Lista de heróis com nome e XP
const herois = [
  { nome: "Coragem", xp: 7350 },
  { nome: "Biscoito", xp: 950 },
  { nome: "Luna", xp: 1800 },
  { nome: "Kael", xp: 5200 },
  { nome: "Farofa", xp: 8700 },
  { nome: "Bob", xp: 10100 },
  { nome: "Pepa", xp: 3000 }
];

// Função para classificar o nível com base no XP
function classificarHeroi(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else if (xp >= 10001) {
    return "Radiante";
  }
}

// Loop para percorrer todos os heróis e mostrar a mensagem
for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i];
  const nivel = classificarHeroi(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
