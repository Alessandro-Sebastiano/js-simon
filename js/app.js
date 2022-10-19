'use strict';


const numBox = document.getElementById('number-box');

const numberButton = document.getElementById('number-button');

const userNum = document.getElementById('user-number');

const inputs = document.getElementById('input-box');

const correctNumbers = document.getElementById('correct-numbers');


const totalNumber = 5;

let counter = 0;

const arrayNumber = [];
const userArray = [];


const hidden = setTimeout(() => {
    numBox.classList.add('hidden');
    clearTimeout(hidden);
}, 3000);


const show = setTimeout(() => {

    inputs.classList.add('show')

}, 3000);





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

    if (userArray.length == totalNumber) {

        console.log('Hai inserito tutti i numeri');
        numberButton.removeEventListener('click', getUserNumbers);

        for (let i = 0; i < userArray.length; i++) {

            if (arrayNumber.includes(userArray[i])) {
                const checkNumber = document.createElement('span');
                checkNumber.innerHTML = userArray[i];
                correctNumbers.append(checkNumber);
                console.log(userArray[i]);
            }

        }

        correctNumbers.classList.add('show');

    }
}


numberButton.addEventListener('click', getUserNumbers);

generateNumber();
putNumber();


