function unirVetores(vetor1, vetor2) {
    // Combinar os dois vetores e usar o Set para eliminar duplicatas
    let uniao = [...new Set(vetor1.concat(vetor2))];
    return uniao;
}


let produtosA = ["arroz", "feijão", "macarrão"];
let produtosB = ["feijão", "açúcar", "farinha"];

console.log(unirVetores(produtosA, produtosB));

