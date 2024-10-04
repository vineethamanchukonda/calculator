function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b==='0')
        return "NaN";
    return a/b;
}

function operate(operand1, operand2, operator){
    if(operator==='+')
        return add(operand1, operand2);
    else if(operator==='-')
        return subtract(operand1, operand2);
    else if(operator==='*')
        return multiply(operand1, operand2);
    else
        return divide(operand1, operand2);
}

let operators=[];
let operands=[0];

let isOperatorBefore=false;
let isOperandBefore=false;

const display = document.getElementById("display");

const operandsList = document.getElementsByClassName("operand");
for (let i = 0; i < operandsList.length; i++) {

    operandsList[i].addEventListener("click", function(){
        // const display = document.getElementById("display");
        if(isOperatorBefore==false && display.innerText==='0')
            operands.pop();
        if(isOperandBefore==false){
            display.innerText=operandsList[i].innerText;
            isOperandBefore=true;
        }
        else{
            display.innerText=display.innerText+operandsList[i].innerText;
            operands.pop();
        }
        operands.push(display.innerText);
    });
}

const operatorList = document.getElementsByClassName("operator");
for (let i = 0; i < operatorList.length; i++) {

    operatorList[i].addEventListener("click", function(){
        isOperandBefore=false;
        if(operators.length!==0){
            let op2, op1;
            op2 = operands.pop();
            if(operands.length==0)
                op1=op2;
            else
                op1 = operands.pop();
            let output=operate(op1, op2, operators.pop());
            if(output==="NaN")
                display.innerText="lmao";
            else{
                
                display.innerText=output; 
            } 
            operands.push(output);
        }
        operators.push(operatorList[i].innerText);
        isOperatorBefore=true;
    });
}

document.getElementById("equals").addEventListener("click",function(){
    if(operands.length!==0 && operators.length!==0){
        let op2, op1;
        op2 = operands.pop();
        if(operands.length==0)
            op1=op2;
        else
            op1 = operands.pop();
        // display.innerText=operate(op1, op2, operators.pop());  
        // operands.push(display.innerText);
        let output=operate(op1, op2, operators.pop());
        if(output==="NaN")
            display.innerText="lmao";
        else{
            
            display.innerText=output; 
        } 
        operands.push(output);
    }
});

document.getElementById("clear").addEventListener("click",function(){
    operators=[];
    operands=[0];
    display.innerText=0;
    isOperandBefore=false;
    isOperatorBefore=false;

});