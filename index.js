let qtdVitorias = 20;
let qtdDerrotas = 10;

let games = qtdVitorias + qtdDerrotas;

let porcentVitoria;
let rankResultado

rankResultado = rank(qtdVitorias, qtdDerrotas);
porcentVitoria = porcentagem(qtdVitorias, games)

console.log("Seu elo é " + rankResultado + " e sua porcentagem de vitória é " + porcentVitoria.toFixed(2) + "%")

function rank(win, lose){
    wins = win - lose;

    if(wins <= 10){
        return rank = "Ferro"
    } else if(wins > 10 && wins <= 20){
        return rank = "Bronze"
    } else if(wins > 20 && wins <= 30){
        return rank = "Prata"
    } else if(wins > 30 && wins <= 40){
        return rank = "Platina"
    } else if(wins > 40 && wins <= 50){
        return rank = "Diamante"
    } else if(wins > 50 && wins <= 60){
        return rank = "Mestre"
    } else{
        return rank = "Desafiante"
    }

    
}

function porcentagem(win, games){
    return (win/games)*100
}