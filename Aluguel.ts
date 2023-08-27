import Cliente from './Cliente';

class Aluguel {
    public cliente: Cliente;
    public bicicletaId: number;
    public dias: number;

    constructor(cliente: Cliente, bicicletaId: number, dias: number) {
        this.cliente = cliente;
        this.bicicletaId = bicicletaId;
        this.dias = dias;
    }

    calcularValorAluguel() {
        const valorDiaria = 10; // Valor da diária da bicicleta
        return this.dias * valorDiaria;
    }

    mostrarDetalhes() {
        const valorAluguel = this.calcularValorAluguel();
        console.log(`Cliente: ${this.cliente.getNome()}, Bicicleta ID: ${this.bicicletaId}, Dias de aluguel: ${this.dias}, Valor do aluguel: R$ ${valorAluguel}`);
    }
}

export default Aluguel;
