class PilhaDeAtendimento {
    constructor() {
      this.pilha = [];
    }
  
   
    adicionarCliente(nome) {
      this.pilha.push(nome);
      console.log(`${nome} foi adicionado à fila.`);
    }
  
    
    removerCliente() {
      if (this.isEmpty()) {
        console.log('Não há clientes na fila para serem atendidos.');
        return null;
      }
      const clienteAtendido = this.pilha.pop();
      console.log(`${clienteAtendido} foi atendido e removido da fila.`);
      return clienteAtendido;
    }
  
    proximoCliente() {
      if (this.isEmpty()) {
        console.log('Não há clientes na fila.');
        return null;
      }
      return this.pilha[this.pilha.length - 1];
    }
  
    isEmpty() {
      return this.pilha.length === 0;
    }
  }
  

  const filaDeAtendimento = new PilhaDeAtendimento();
  

  filaDeAtendimento.adicionarCliente('João');
  filaDeAtendimento.adicionarCliente('Maria');
  filaDeAtendimento.adicionarCliente('José');
  

  console.log('Próximo cliente a ser atendido:', filaDeAtendimento.proximoCliente());
  

  filaDeAtendimento.removerCliente();
  filaDeAtendimento.removerCliente();
  

  console.log('Próximo cliente a ser atendido:', filaDeAtendimento.proximoCliente());
  

  console.log('Há clientes na fila?', filaDeAtendimento.isEmpty() ? 'Não' : 'Sim');
  