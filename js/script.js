function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}

function displayOutput(output){
    document.querySelector('.display').textContent += output;
}

function clearOutput(){
    document.querySelector('.display').textContent = '';
}

let operandOne;
let operandTwo;
let operator;
let output;

const numberGroup = document.querySelectorAll('.number-group button');
numberGroup.forEach(i=>i.addEventListener('click', () => displayOutput(i.textContent)));

const operatorGroup = document.querySelectorAll('.operator-group button');
operatorGroup.forEach(i=>i.addEventListener('click', () => displayOutput(i.textContent)));