const ATTACK_VALUE =10;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 10;
let chosenMaxLife =100;
let hasBonusLife =true;
let battelLog=[];

const ENTERED_VALUE = prompt('Max life for you and the Monster.','100');
chosenMaxLife = parseInt(ENTERED_VALUE);
if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife =100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayersHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

let reset=()=>{
    currentPlayersHealth = chosenMaxLife;
    currentMonsterHealth=chosenMaxLife;
    resetGame(chosenMaxLife);
    writeToLog("RESET GAME","RESET",chosenMaxLife,currentMonsterHealth,currentPlayersHealth);
}

let endRound =()=>{
    if(currentPlayersHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayersHealth = HEAL_VALUE;
        alert('You would be dead but the bonus life saved you !!');
        setPlayerHealth(currentPlayersHealth);
        writeToLog("BONUS LIFE USED","PLAYER",HEAL_VALUE,currentMonsterHealth,currentPlayersHealth);
    }
   else if(currentPlayersHealth <= 0 && currentMonsterHealth > 0){
    alert("You Lost!!");
    writeToLog("GAME OVER","YOU LOST",0,currentMonsterHealth,currentPlayersHealth);
    reset();
   }

else if(currentMonsterHealth <=0 && currentPlayersHealth > 0){
    alert("You Won!!");
    writeToLog("GAME OVER","YOU WON",0,currentMonsterHealth,currentPlayersHealth);
    reset();
}

else if(currentMonsterHealth <= 0 && currentPlayersHealth <=0){
    alert("You Have A Draw!!"); 
    writeToLog("GAME OVER","DRAW",0,currentMonsterHealth,currentPlayersHealth);
    reset(); 
}

}

let attack =(value)=>{
    let event;
    if(value == ATTACK_VALUE)
    event = "ATTACK";
    else if(value == STRONG_ATTACK_VALUE)
    event = "STRONG ATTACK";
    let damage = delMonsterDamage(value);
    currentMonsterHealth = currentMonsterHealth - damage;    
    writeToLog(`PLAYER ${event}`,"MONSTER",damage,currentMonsterHealth,currentPlayersHealth);
    damage = delPlayerDamage(value);
    currentPlayersHealth = currentPlayersHealth - damage;
    writeToLog(`MONSTER ${event}`,"PLAYER",damage,currentMonsterHealth,currentPlayersHealth);
    endRound(); 
}

let attackHandler = ()=>{
    attack(ATTACK_VALUE);
}

let strongAttacHandler=()=>{
    attack(STRONG_ATTACK_VALUE); 
}

let healHandler =()=>{
    if(chosenMaxLife < currentPlayersHealth + HEAL_VALUE)
        alert("You cant heal more than your max initial health !!")
    else{
    increasePlayerHealth(HEAL_VALUE);
    currentPlayersHealth = currentPlayersHealth + HEAL_VALUE;
    writeToLog("PLAYER HEAL","PLAYER",HEAL_VALUE,currentMonsterHealth,currentPlayersHealth);
    let  damage = delPlayerDamage(ATTACK_VALUE);
    currentPlayersHealth = currentPlayersHealth - damage;
    writeToLog("MONSTER ATTACK","PLAYER",damage,currentMonsterHealth,currentPlayersHealth);
    endRound();
    }    
}

let writeToLog=(event,target,value,finalMonsterHealth,finalPlayerHealth)=>{
    let logEntry;
    logEntry={
        Event:event,
        Target:target,
        Value:value,
        FinalMonsterHealth:finalMonsterHealth,
        FinalPlayerHealth:finalPlayerHealth
    }
    battelLog.push(logEntry);
}

let showLog =()=>{
    console.log(battelLog);
}


attackBtn.addEventListener('click',attackHandler);

strongAttackBtn.addEventListener('click',strongAttacHandler);

healBtn.addEventListener('click',healHandler);

logBtn.addEventListener('click',showLog);