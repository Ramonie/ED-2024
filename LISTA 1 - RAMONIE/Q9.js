function contarParesEImpares(numeros) {
    let contagem = {
        pares: 0,
        impares: 0
    };

    // Percorrer o vetor e verificar se cada número é par ou ímpar
    for (let num of numeros) {
        if (num % 2 === 0) {
            contagem.pares++;
        } else {
            contagem.impares++;
        }
    }

    return contagem;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(contarParesEImpares(numeros));

