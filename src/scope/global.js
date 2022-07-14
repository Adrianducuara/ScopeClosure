//Entender unos conceptos sobre como construimos las variables:

var a; //declarando
var b = 'b' //declaramos / asignamos
b = 'bb'; //reasignando
var a = 'aa'; //redeclarando

//Global Scope
var fruit = 'apple'; //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit();

//tener cuidado podemos sin saberlo declarar variables globales

function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country)