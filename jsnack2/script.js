const numberArr = [];
const arrayMaxLenght = 30;
const numberMaxValue = 20;
let totalSum = 0;

//populate the array randomly
for(let i = 0; i < arrayMaxLenght; i++) {
    numberArr[i] = Math.floor(Math.random() * (numberMaxValue) + 1);
}

//sum the odd index numbers and write it to the console
for(let i = 1; i < numberArr.length; i += 2) {
    totalSum += numberArr[i];
}

//write total sum in the console
console.log(`La somma totale dei numeri con indice dispari è ${totalSum}`);