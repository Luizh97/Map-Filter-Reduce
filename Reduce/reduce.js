function verificaSaldo(saldo, itens){
   

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final é ${saldoFinal} reais`;
}



lista = [
    {
        preco: 1,
        nome: 'uva',
    },
    {
        preco: 2,
        nome: 'abacaxi',

    },
    {
        preco: 5,
        nome: 'melancia',
    },
];


saldo = 100;

console.log(verificaSaldo(saldo, lista));