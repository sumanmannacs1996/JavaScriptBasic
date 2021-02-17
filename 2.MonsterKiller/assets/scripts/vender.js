const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById("log-btn");

const adjustHealthBars = (maxLife)=>{
    monsterHealthBar.max =maxLife;
    monsterHealthBar.value =maxLife;
    playerHealthBar.max =maxLife;
    playerHealthBar.value=maxLife;
}

const delMonsterDamage =(damage)=>{
    const damage =Math.random() * damage;
    monsterHealthBar.value = monsterHealthBar.value -damage;
    return damage;
}

const delPlayerDamage =(damage)=>{
    const damage =Math.random() * damage;
    playerHealthBar.value = playerHealthBar.value -damage;
    return damage;
}

const increasePlayerHealth =(healthValue)=>{
    playerHealthBar.value = playerHealthBar.value + healthValue;
}

const resetGame = (value)=>{
    playerHealthBar.value=value;
    monsterHealthBar.value =value;
}

const setPlayerHealth = (health)=>{
    playerHealthBar.value = health;
}