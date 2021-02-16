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
const add =()=>{
    getUserInput();
    newResult = currentResult + inputData;
    calcDescription = `${currentResult} + ${inputData}` ;
    if(currentResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` + ${inputData}`;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);
}

const subtract =()=>{
    getUserInput();
    newResult = currentResult -inputData;
    calcDescription = `${currentResult} - ${inputData}` ;
    if(currentResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` - ${inputData}`;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);
}

const multply =()=>{
    getUserInput();
    newResult = currentResult * inputData;
    calcDescription = `${currentResult} * ${inputData}` ;
    if(currentResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` * ${inputData}`;;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);
}

const devide =()=>{
    getUserInput();
    newResult = currentResult / inputData;
    calcDescription = `${currentResult} / ${inputData}` ;
    if(currentResult ==0)
    logEntry = logEntry+calcDescription;
    else
    logEntry = logEntry + ` / ${inputData}`;
    currentResult = newResult;
    outputResult(currentResult,calcDescription,logEntry);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multplyBtn.addEventListener('click',multply);
divitioBtn.addEventListener('click',devide);

