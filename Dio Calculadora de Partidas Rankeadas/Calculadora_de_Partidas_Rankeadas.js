let vitorias = 100
let derrotas = 50
let saldoVitorias = vitorias - derrotas
let patente

function CalcRank(saldo){
    let patentes = [[0, 10, "Ferro"], 
                    [11, 20, "Bronze"], 
                    [21, 50, "Prata"],
                    [51, 80, "Ouro"],
                    [81, 90, "Diamnte"],
                    [91, 100, "Lendário"]];
    let patenteUsuario
    let i

    for(i = 0; i < 6; i++){
        if(saldo >= patentes[i][0] && saldo <= patentes[i][1]){
            patenteUsuario = patentes[i][2]
            break
        }
    }

    if(i == 6){
        patenteUsuario = "Imortal"
    }

    return patenteUsuario;

}

patente = CalcRank(saldoVitorias)

console.log("O Herói tem de saldo de vitorias de " + saldoVitorias + " e está no nível " + patente)