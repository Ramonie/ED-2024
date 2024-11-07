function transporMatriz(matriz) {
    let transposta = [];
    
    // Percorrer as colunas da matriz original
    for (let i = 0; i < matriz[0].length; i++) {
        let novaLinha = [];
        
        // Para cada coluna, criar uma nova linha na matriz transposta
        for (let j = 0; j < matriz.length; j++) {
            novaLinha.push(matriz[j][i]);
        }
        
        // Adicionar a nova linha à matriz transposta
        transposta.push(novaLinha);
    }
    
    return transposta;
}

// Exemplo de uso
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(transporMatriz(matriz));
// Saída esperada:
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]
