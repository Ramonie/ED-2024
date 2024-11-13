class Queue {
    constructor() {
        this.items = [];
    }

    
    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Fila está vazia!";
        }
        return this.items.shift();
    }

    
    peek() {
        if (this.isEmpty()) {
            return "Fila está vazia!";
        }
        return this.items[0];
    }

   
    isEmpty() {
        return this.items.length === 0;
    }
}

const taskQueue = new Queue();
taskQueue.enqueue("Tarefa 1");
taskQueue.enqueue("Tarefa 2");

console.log(taskQueue.peek()); 
console.log(taskQueue.dequeue()); 
console.log(taskQueue.isEmpty());
