class HashTablePersonalizada {
    constructor() {
        this.tabela = {};
    }

    hash(chave) {
        let hash = 0;
        for (let i = 0; i < chave.length; i++) {
            hash += chave.charCodeAt(i);
        }
        return hash % 37;
    }

    put(chave, valor) {
        const index = this.hash(chave);

        if (!this.tabela[index]) {
            this.tabela[index] = [];
        }

        for (let i = 0; i < this.tabela[index].length; i++) {
            if (this.tabela[index][i][0] === chave) {
                this.tabela[index][i][1] = valor;
                return;
            }
        }

        this.tabela[index].push([chave, valor]);
    }

    get(chave) {
        const index = this.hash(chave);

        if (this.tabela[index]) {
            for (let [key, value] of this.tabela[index]) {
                if (key === chave) {
                    return value;
                }
            }
        }

        return null;
    }

    remove(chave) {
        const index = this.hash(chave);

        if (this.tabela[index]) {
            for (let i = 0; i < this.tabela[index].length; i++) {
                if (this.tabela[index][i][0] === chave) {
                    this.tabela[index].splice(i, 1);
                    if (this.tabela[index].length === 0) {
                        delete this.tabela[index];
                    }
                    return true;
                }
            }
        }

        return false;
    }
}

const hashTable = new HashTablePersonalizada();

hashTable.put("nome", "Maria");
hashTable.put("idade", 30);
hashTable.put("email", "maria@example.com");
hashTable.put("cidade", "São Paulo");

console.log("Buscar 'nome':", hashTable.get("nome"));
console.log("Buscar 'idade':", hashTable.get("idade"));

hashTable.put("cidade", "Rio de Janeiro");
console.log("Atualizar 'cidade':", hashTable.get("cidade"));

hashTable.remove("idade");
console.log("Após remover 'idade':", hashTable.get("idade"));

hashTable.put("abc", "Colisão 1");
hashTable.put("cba", "Colisão 2");
console.log("Buscar 'abc':", hashTable.get("abc"));
console.log("Buscar 'cba':", hashTable.get("cba"));
