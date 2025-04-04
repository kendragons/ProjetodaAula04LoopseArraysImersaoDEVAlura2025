// Criando uma lista para os artistas da banda do jogador
bandaJogador = ["", "", ""];

// Criando uma lista para a banda rival gerada pelo computador
bandaRival = ["", "", ""];

forcaBandaJogador = 0;
forcaBandaRival = 0;

alert("O lineup da sua banda contém: " + bandaJogador);

// Escolha dos artistas pelo jogador
for (let i = 0; i < 3; i++) {
  escolhaArtista = prompt("Digite o nome do artista " + (i + 1) + " da sua banda");
  bandaJogador[i] = escolhaArtista;
  // Determina a força musical do artista
  forcaBandaJogador = forcaBandaJogador + Math.floor(Math.random() * 10) + 1;
}

console.log("Agora, o lineup da sua banda contém: " + bandaJogador);
console.log("Gerando banda rival...");

// Gerando banda rival aleatoriamente
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5);
  artistasPossiveis = [
    "Freddie Mercury",
    "Elvis Presley",
    "Beyoncé",
    "Michael Jackson",
    "Jimi Hendrix",
    "Elton John",
    "Aretha Franklin",
    "Prince",
    "Madonna"
  ];
  bandaRival[i] = artistasPossiveis[indiceAleatorio];
  // Determina a força musical da banda rival
  forcaBandaRival = forcaBandaRival + Math.floor(Math.random() * 10) + 1;
}

console.log("Banda Rival: " + bandaRival);

// Comparação das bandas para decidir o vencedor do show
if (forcaBandaJogador > forcaBandaRival) {
  alert("Parabéns! Sua banda fez um show inesquecível e conquistou o público! Sua força foi " + forcaBandaJogador);
} else if (forcaBandaJogador < forcaBandaRival) {
  alert("A banda rival brilhou mais no palco! Eles venceram com uma força de " + forcaBandaRival);
} else {
  alert("Foi um duelo épico! As duas bandas empataram com a mesma força musical!");
}