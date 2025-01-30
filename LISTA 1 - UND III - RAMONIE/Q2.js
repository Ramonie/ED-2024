// Classe para representar um nó da árvore AVL
class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Altura inicial do nó
    }
}

// Classe para representar a Árvore AVL
class AVLTree {
    constructor() {
        this.root = null;
    }

    // Método para obter a altura de um nó
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Método para calcular o fator de balanceamento de um nó
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Rotação simples à direita
    rotateRight(y) {
        let x = y.left;
        let T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        
        return x;
    }

    // Rotação simples à esquerda
    rotateLeft(x) {
        let y = x.right;
        let T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        
        return y;
    }

    // Método para inserir um novo valor na árvore AVL
    insert(node, value) {
        if (!node) return new AVLNode(value);
        
        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            return node; // Duplicatas não são permitidas
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        
        let balance = this.getBalanceFactor(node);

        // Casos de desbalanceamento e rotações necessárias
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        
        return node;
    }

    // Método público para inserir um valor na árvore
    insertValue(value) {
        this.root = this.insert(this.root, value);
    }

    // Impressão da árvore por nível (BFS - Level Order Traversal)
    levelOrderTraversal() {
        if (!this.root) return [];
        let queue = [this.root];
        let result = [];

        while (queue.length > 0) {
            let current = queue.shift();
            result.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }
}

// Criando a árvore AVL e inserindo os valores
const avl = new AVLTree();
const values = [10, 20, 30, 40, 50, 60, 70];
values.forEach(value => avl.insertValue(value));

// Exibindo a árvore por nível
console.log("Árvore AVL (por nível):", avl.levelOrderTraversal());