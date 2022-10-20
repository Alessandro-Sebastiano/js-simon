'use strict';


const numBox = document.getElementById('number-box');

const numberButton = document.getElementById('number-button');

const userNum = document.getElementById('user-number');

const inputs = document.getElementById('input-box');

const correctNumbers = document.getElementById('correct-numbers');


const totalNumber = 5;

let counter = 0;

let timer = 3000;

const arrayNumber = [];
const userArray = [];


const hidden = setTimeout(() => {
    numBox.classList.add('hidden');
    clearTimeout(hidden);
}, timer);


const show = setTimeout(() => {

    inputs.classList.add('show')
    clearTimeout(show);

}, timer);





function generateNumber() {

    while (arrayNumber.length < totalNumber) {
        const randomNumber = Math.floor(Math.random() * 100);
        if (!arrayNumber.includes(randomNumber)) {
            arrayNumber.push(randomNumber);
        }
    }

}


function putNumber() {

    for (let i = 0; i < arrayNumber.length; i++) {

        const printNumber = document.createElement('span');
        printNumber.innerHTML = arrayNumber[i];
        numBox.append(printNumber);

    }

}


function getUserNumbers() {

    let inputNumber = parseInt(userNum.value);
    console.log(inputNumber);
    if (userArray.length != totalNumber && !userArray.includes(inputNumber)) {
        userArray.push(inputNumber);
        userNum.value = '';
    }

    result()

    console.log(userArray, arrayNumber);
}



function result() {
    const count = document.getElementById('count');

    if (userArray.length == totalNumber) {

        correctNumbers.classList.add('show');

        console.log('Hai inserito tutti i numeri');
        numberButton.removeEventListener('click', getUserNumbers);

        for (let i = 0; i < userArray.length; i++) {

            if (arrayNumber.includes(userArray[i])) {
                counter++;
                const checkNumber = document.createElement('span');
                checkNumber.innerHTML = userArray[i];
                correctNumbers.append(checkNumber);
                console.log(userArray[i]);
            } else if (counter == 0) {
                correctNumbers.innerHTML = `<h1>Nessun numero indovinato</h1>`;
            }

        }

        count.append(counter);

    }
}


numberButton.addEventListener('click', getUserNumbers);

generateNumber();
putNumber();


