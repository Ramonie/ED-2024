function calcularDeterminante(matriz) {
    if (matriz.length !== 2 || matriz[0].length !== 2 || matriz[1].length !== 2) {
        throw new Error("A matriz deve ser 2x2");
    }
    
    // Aplicar a fórmula do determinante: (a * d) - (b * c)
    let a = matriz[0][0];
    let b = matriz[0][1];
    let c = matriz[1][0];
    let d = matriz[1][1];
    
    return (a * d) - (b * c);
}


let matriz = [
    [3, 8],
    [4, 6]
];

console.log(calcularDeterminante(matriz)); 
