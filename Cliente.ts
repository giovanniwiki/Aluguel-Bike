class Cliente {
    public nome: string;

    //construtor apenas com nome, mas posteriormente podem ser adicionadas informações como CPF
    constructor(nome: string) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }
}

export default Cliente;
