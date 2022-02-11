function somaNum(arr){
    if (!arr || !arr.length) return;
    const soma = arr.reduce((prev, curr) => prev + curr);


    return soma;
}

console.log(somaNum([5, 2, 3, 25]));