import Bicicleta from './Bicicleta';
import Loja from './Loja';
import Cliente from './Cliente';
import Aluguel from './Aluguel';

// Cria 4 bicicletas na loja de id 1 a 5
const loja = new Loja(5);
// Cria o cliente
const cliente = new Cliente("João");
// Alugar a bicicleta #id por 5 dias
const aluguel = new Aluguel(cliente, 3, 5); 

loja.alugarBicicleta(3);
aluguel.mostrarDetalhes();
loja.devolverBicicleta(3);
