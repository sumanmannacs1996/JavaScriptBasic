const defaultResult =0;
let currentResult = defaultResult;
let newResult;
let calcDescription ='';

function getUserInput(){
    return parseFloat(userInput.value);
}
const add =()=>{
    newResult = currentResult + getUserInput();
    calcDescription = `${currentResult} + ${getUserInput()}` ;
    currentResult = newResult;
    outputResult(currentResult,calcDescription);
}

const subtract =()=>{
    newResult = currentResult - getUserInput();
    calcDescription = `${currentResult} - ${getUserInput()}` ;
    currentResult = newResult;
    outputResult(currentResult,calcDescription);
}

const multply =()=>{
    newResult = currentResult * getUserInput();
    calcDescription = `${currentResult} * ${getUserInput()}` ;
    currentResult = newResult;
    outputResult(currentResult,calcDescription);
}

const devide =()=>{
    newResult = currentResult / getUserInput();
    calcDescription = `${currentResult} / ${getUserInput()}` ;
    currentResult = newResult;
    outputResult(currentResult,calcDescription);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multplyBtn.addEventListener('click',multply);
divitioBtn.addEventListener('click',devide);

