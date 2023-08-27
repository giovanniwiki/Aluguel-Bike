class Bicicleta {
    public id: number;
    public disponivel: boolean;

    constructor(id: number) {
        this.id = id;
        this.disponivel = true;
    }

    //função de alugar muda o estado para indisponível após alugado
    alugar() {
        if (this.disponivel) {
            this.disponivel = false;
        } 
    }

    //função que muda o estado para disponível após devolvido
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
        } 
    }

    //função retorna o estado atual da bicicleta
    estaDisponivel() {
        return this.disponivel;
    }
}

export default Bicicleta;
