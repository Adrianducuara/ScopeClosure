//Cada function que se define tiene su propio alcance
//si una function es definida dentro de otra function
//solo será accesible en esa function y en cualquiera de sus function anidadas.
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName) // is not defined;