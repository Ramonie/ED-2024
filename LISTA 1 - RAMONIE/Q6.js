function buscarProduto(produtos, produtoBuscar) {
    return produtos.includes(produtoBuscar);
}


let produtos = ["arroz", "feijão", "macarrão", "açúcar"];
console.log(buscarProduto(produtos, "feijão")); 
console.log(buscarProduto(produtos, "farinha")); 
