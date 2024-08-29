let bread1 = prompt(" Enter your bread ");
let veggies1 = prompt(" Enter your vegetable ");
let sauce1 = prompt(" Enter your sauce ");

function makeSandwich(b , v , s){

    let sandwich = b + " bread " + v + " veggies " + s + " sauces your sandwich is ready ";

    return sandwich ;
}

let vegsandwich = makeSandwich(bread1 , veggies1 , sauce1);
console.log(vegsandwich);
