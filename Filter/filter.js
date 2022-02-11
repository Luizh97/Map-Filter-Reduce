function encontraPares(arr){
    if(!arr || !arr.length) return;

    const filtrarArray = arr.filter((item) => item % 2 === 0);

    return filtrarArray;
}

console.log(encontraPares([2, 4, 8, 25, 33, 37]));