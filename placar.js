let scoreBoard = null; // array responsável por manter o placar.

function createScoreBoard() {
  scoreBoard = [{"Pixelito": 1000000}];
}

function addPlayer(player, score) {
  //if (scoreBoard === null) {
  //  createScoreBoard();
  //}
  scoreBoard.push({[player]: score});
}

function removePlayer(player) {
  const playerIndex = scoreBoard.findIndex(x => Object.keys(x)[0] === player);
  if (playerIndex !== -1) {
    scoreBoard.splice(playerIndex, 1);
  }
}

function updateScore(player, score) {
  const playerIndex = scoreBoard.findIndex(x => Object.keys(x)[0] === player);
  if (playerIndex !== -1) {
    scoreBoard[playerIndex][player] += score;
  } else {
    console.log("Jogador ainda não cadastrado");
  }
}

function applyBonus(value=50) {
  // padrão 50 pts adicionados a cada jogador.
  for (let i = 0; i < scoreBoard.length; i++) {
    const player = Object.keys(scoreBoard[i])[0];
    scoreBoard[i][player] += value;
  }
}

function listScoreBoard() {
  // como o problema não define se a ordem do placar deve permancer por ordem de adicionado, usarei sort para ordenar por pontuação
  scoreBoard.sort((a, b) => {
    // sort aceita uma funcao que compara dois elemetos para fazer um sort customizado
    // Object.keys(b)[0] retornaria o nome do jogador, e b[Object.keys(b)[0]] retornaria o score desse jogador.
    return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
  });

  for (let i = 0; i < scoreBoard.length; i++) {
    console.log(`${i+1}. ${Object.keys(scoreBoard[i])[0]} - ${Object.values(scoreBoard[i])[0]} pontos`);
  }
}


createScoreBoard();
addPlayer("Higor", 150);
addPlayer("Jefferson", 200);
addPlayer("Stephan", 111);
removePlayer("Jefferson");
updateScore("Higor", 100);
applyBonus();
listScoreBoard();
// Retorno esperado:
// 1. Higor - 300 pontos
// 2. Stephan - 161 pontos
