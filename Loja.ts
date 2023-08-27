import Bicicleta from './Bicicleta';

class Loja {
    public bicicletas: Bicicleta[];

    //construtor cria um vetor da classe Bicicleta
    constructor(numBicicletas: number) {
        this.bicicletas = [];
        for (let i = 1; i <= numBicicletas; i++) {
            this.bicicletas.push(new Bicicleta(i));
        }
    }

    // Função que verifica o ID da bicicleta, se está disponível, se sim, aluga a bicileta e altera seu estado
    // e também mostra uma mensagem que foi alugada ou se não está disponível
    alugarBicicleta(id: number) {
        if (id >= 1 && id <= this.bicicletas.length) {
            if (this.bicicletas[id - 1].estaDisponivel()) {
                this.bicicletas[id - 1].alugar();
                console.log(`A bicicleta ${id} foi alugada.`);
            } else {
                console.log(`A bicicleta ${id} não está disponível para aluguel.`);
            }
        } else {
            console.log(`ID de bicicleta inválido: ${id}`);
        }
    }

    devolverBicicleta(id: number) {
        if (id >= 1 && id <= this.bicicletas.length) {
            this.bicicletas[id - 1].devolver();
            console.log(`A bicicleta ${id} foi devolvida.`);
        } else {
            console.log(`ID de bicicleta inválido: ${id}`);
        }
    }
}

export default Loja;
