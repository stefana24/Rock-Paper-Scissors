const rockImage = document.getElementById('rock-image');
const paperImage = document.getElementById('paper-image');
const scissorImage = document.getElementById('scissor-image');

const possiblevalues = ['rock','paper','scissor'];

let user_counter = 0;
let computer_counter = 0;
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');


const displayMsg = document.getElementById('move');
let computer;

rockImage.addEventListener('click',function(){
    computer = possiblevalues[Math.floor(Math.random()*3)];

    if(computer === 'scissor'){
        user_counter++;
        userScore.textContent = user_counter;
        displayMsg.textContent = 'Rock beats Scissor';
    }else if(computer === 'paper'){
        computer_counter++;
        computerScore.textContent = computer_counter;
        displayMsg.textContent ='Paper beats Rock';
    }else{
        displayMsg.textContent ='It is equality';
    }
})

paperImage.addEventListener('click',function(){
    computer = possiblevalues[Math.floor(Math.random()*3)];

    if(computer === 'scissor'){
        computer_counter++;
        computerScore.textContent = computer_counter;
        displayMsg.textContent = 'Scissor beats paper';
    }else if(computer === 'rock'){
        user_counter++;
        userScore.textContent = user_counter;
        displayMsg.textContent ='Paper beats Rock';
    }else{
        displayMsg.textContent ='It is equality';
    }
})


scissorImage.addEventListener('click',function(){

    computer = possiblevalues[Math.floor(Math.random()*3)];

    if(computer === 'paper'){
        user_counter++;
        userScore.textContent = user_counter;
        displayMsg.textContent = 'Scissor beats paper';
    }else if(computer === 'rock'){
        computer_counter++;
        computerScore.textContent = computer_counter;
        displayMsg.textContent ='Rock beats scissor';
    }else{
        displayMsg.textContent ='It is equality';
    }
})
