function contarOcorrencias(palavras, palavraContar) {
    return palavras.reduce((contador, palavra) => {
        if (palavra === palavraContar) {
            return contador + 1;
        }
        return contador;
    }, 0);
}

// Exemplo de uso
let palavras = ["programação", "estudo", "sair", "diversão","sair"];
console.log(contarOcorrencias(palavras, "sair")); 
