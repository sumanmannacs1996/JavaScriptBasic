const ATTACK_VALUE =10;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 10;
let chosenMaxLife =100;
let hasBonusLife =true;

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
}

let endRound =()=>{
    if(currentPlayersHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayersHealth = HEAL_VALUE;
        alert('You would be dead but the bonus life saved you !!');
        setPlayerHealth(currentPlayersHealth);
    }
   else if(currentPlayersHealth <= 0 && currentMonsterHealth > 0){
    alert("You Lost!!");
    reset();
   }

else if(currentMonsterHealth <=0 && currentPlayersHealth > 0){
    alert("You Won!!");
    reset();
}

else if(currentMonsterHealth <= 0 && currentPlayersHealth <=0){
    alert("You Have A Draw!!"); 
    reset(); 
}

}

let attack =(value)=>{
    let damage = delMonsterDamage(value);
    currentMonsterHealth = currentMonsterHealth - damage;
    damage = delPlayerDamage(value);
    currentPlayersHealth = currentPlayersHealth - damage;
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
    let  damage = delPlayerDamage(ATTACK_VALUE);
    currentPlayersHealth = currentPlayersHealth - damage;
    endRound();
    }    
}


attackBtn.addEventListener('click',attackHandler);

strongAttackBtn.addEventListener('click',strongAttacHandler);

healBtn.addEventListener('click',healHandler)