const melancia = {
    price: 8,
}; 

const morango = {
    price: 5
};


function percorreArray(){
    const array = [1, 2, 3, 4, 5, 6];

    return array.map(function(item){
        return item * this.price;
    
    }, melancia);
}

console.log(percorreArray())