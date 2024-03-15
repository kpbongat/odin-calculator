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
    let result;
    switch(operator){
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
    }
    return Math.round(result);
}

function displayOutput(output){
    document.querySelector('.display').textContent += output;
}

function getOutput(){
    return document.querySelector('.display').textContent;
}

function clearOutput(){
    document.querySelector('.display').textContent = '';
}

let operandOne;
let operandTwo;
let operator;
let output;

const numberGroup = document.querySelectorAll('.number-group button');
numberGroup.forEach(i=>i.addEventListener('click', () => {
    if (getOutput() === '0'){
        clearOutput();
    }
    displayOutput(i.textContent)}));

const operatorGroup = document.querySelectorAll('.operator-group button,.equal');
operatorGroup.forEach(i=>i.addEventListener('click', () => {
    output = getOutput();
    if (getOutput() === '0' && i.textContent != '='){
        clearOutput();
    }
    operator = output.split('')
                     .filter(i=>isNaN(+i))
                     .pop();
                    
    if (!operandOne){
        operandOne = output.split(operator)
                           .map(i=> (!i) ? '0' : i)[0];
    }
    operandTwo = output.replace(operandOne,'')
                       .split(operator)
                       .map(i=> (!i) ? '0' : i)[1];
        
    if(operandOne && operandTwo) {
        operandOne = operate(operator,+operandOne,+operandTwo);
        operandTwo = undefined;
        clearOutput();
        displayOutput(operandOne);
    }
    if (i.textContent !== '='){
        displayOutput(i.textContent);
    }
    

}));

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clearOutput();
    displayOutput('0');
    operandOne = undefined;
    operandTwo = undefined;
    operator = undefined;
});