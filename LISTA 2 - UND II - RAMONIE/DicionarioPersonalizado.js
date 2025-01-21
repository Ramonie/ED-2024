// Classe DicionarioPersonalizado
class DicionarioPersonalizado {
    constructor() {
        this.dados = {}; 
    }

    
    set(chave, valor) {
        this.dados[chave] = valor;
    }

    
    get(chave) {
        return this.dados[chave] || null;
    }

   
    remove(chave) {
        if (this.hasKey(chave)) {
            delete this.dados[chave];
            return true;
        }
        return false;
    }

    
    hasKey(chave) {
        return chave in this.dados;
    }

  
    keys() {
        return Object.keys(this.dados);
    }

    
    values() {
        return Object.values(this.dados);
    }

   
    size() {
        return this.keys().length;
    }

    clear() {
        this.dados = {};
    }
}


const dicionario = new DicionarioPersonalizado();


dicionario.set("nome", "Maria");
dicionario.set("idade", 30);
dicionario.set("email", "maria@example.com");
dicionario.set("cidade", "São Paulo");

console.log("Chaves:", dicionario.keys());
console.log("Valores:", dicionario.values());
console.log("Nome:", dicionario.get("nome")); 
console.log("A chave 'idade' existe?", dicionario.hasKey("idade")); 
dicionario.remove("idade");
console.log("Após remover 'idade':", dicionario.keys(), dicionario.values());
console.log("Tamanho do dicionário:", dicionario.size()); 
dicionario.clear();
console.log("Dicionário após limpar:", dicionario.keys(), dicionario.values());
