const defaultResult =0;
let currentResult = defaultResult;
let newResult;
let calcDescription ='';
let logEntry='';
let inputData;

function getUserInput(){
    if(userInput.value == ''){
        alert("Please Enter The Number First!!")
        userInput.textContent =0;
        inputData =0;
        return false;
    }
    inputData = parseFloat(userInput.value);
}
const calculateResult =(calculationType)=>{
    getUserInput();
    if(calculationType =="+"){
        newResult = currentResult + inputData;
        operationSymbol ='+' ;  
    }
    else if(calculationType =='-'){
        newResult = currentResult - inputData;
        operationSymbol ='-' ; 
    }
    else if(calculationType =='*'){
        newResult = currentResult * inputData;
        operationSymbol ='*' ; 
    }
    else if(calculationType =='/'){
        newResult = currentResult / inputData;
        operationSymbol ='/' ; 
    }
    calcDescription = `${currentResult} ${calculationType} ${inputData}` ;
    if(currentResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` ${calculationType} ${inputData}`;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);

}

const add =()=>{
    calculateResult("+");
}

const subtract =()=>{
    calculateResult("-");
}

const multply =()=>{
    calculateResult("*");
}

const devide =()=>{
    calculateResult("/");
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multplyBtn.addEventListener('click',multply);
divitioBtn.addEventListener('click',devide);

