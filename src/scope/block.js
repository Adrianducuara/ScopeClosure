//con la introducción de let y const se introdujo el concepto
//de block scope ECMASCRIPT 6
function fruits() {
    if(true) {
        var fruit1 = 'Apple'; //Function scope
        let fruit2 = 'Kiwi'; //Block scope
        const fruit3 = 'Banana'; //Block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();