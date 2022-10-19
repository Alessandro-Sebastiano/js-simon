'use strict';


const numBox = document.getElementById('number-box');

const numberButton = document.getElementById('number-button');

const userNum = document.getElementById('user-number');

const inputs = document.getElementById('input-box');


const totalNumber = 5;

const arrayNumber = [];
const userArray = [];

function generateNumber() {

    while (arrayNumber.length < totalNumber) {
        const randomNumber = Math.floor(Math.random() * 100);
        if (!arrayNumber.includes(randomNumber)) {
            arrayNumber.push(randomNumber);
        }
    }

}


const hidden = setTimeout(() => {
    numBox.classList.add('hidden');
    clearTimeout(hidden);
}, 3000);


function putNumber() {

    for (let i = 0; i < arrayNumber.length; i++) {

        const printNumber = document.createElement('span');
        printNumber.innerHTML = arrayNumber[i];
        numBox.append(printNumber);

    }

}


const show = setTimeout(() => {

    inputs.classList.add('show')

}, 3000);


function getUserNumbers() {

    inputs.classList.add('show');
    let inputNumber = parseInt(userNum.value);
    console.log(inputNumber);
    if (userArray.length == totalNumber - 1) {
        console.log('Hai inserito tutti i numeri');
        numberButton.removeEventListener('click', getUserNumbers);
    } else {
        userArray.push(inputNumber);
        userNum.value = '';
    }


    console.log(userArray, arrayNumber);
}


numberButton.addEventListener('click', getUserNumbers);


console.log(arrayNumber);


generateNumber();
putNumber();

