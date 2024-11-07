function somaNotas(notas) {
    return notas.reduce((soma, nota) => soma + nota, 0);
}
//A função reduce() itera sobre cada elemento do array notas e acumula a soma de todas as notas.
let notas = [8.5, 7.0, 9.0, 6.5];
console.log(somaNotas(notas)); // Saída: 31.0
