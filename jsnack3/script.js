const arrayA = [1, 1, 1, 1, 1, 1, 1 ];
const arrayB = [2, 2, 2 ];

//write on the console the state of the array before the function
console.log("All'inizio gli array sono lunghi cosi:")
console.log(arrayA);
console.log(arrayB);

//check the bigger array and add numbers till its the same lenght
if (arrayA.length > arrayB.length){
    const lenghtDifference = arrayA.length - arrayB.length;

    for(let i = 0; i < lenghtDifference; i++) {
        arrayB.push(3);
    }
}
else if(arrayA.length < arrayB.length) {
    const lenghtDifference = arrayB.length - arrayA.length;

    for(let i = 0; i < lenghtDifference; i++) {
        arrayA.push(3);
    }
}

//write on the console the state of the array after the function
console.log("Alla fine gli array sono lunghi cosi:")
console.log(arrayA);
console.log(arrayB);