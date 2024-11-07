function matrizIdentidade(n) {
    // Inicializa uma matriz n x n com zeros
    let matriz = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Define os elementos da diagonal principal como 1
    for (let i = 0; i < n; i++) {
        matriz[i][i] = 1;
    }
    
    return matriz;
}


let n = 4;
console.log(matrizIdentidade(n));

