var userScore = 0;
var computerScore = 0;
//variables stored to be use later
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const socreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const rNumber = Math.floor(3*Math.random());
  return choices[rNumber];
}

function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  });
  paper_div.addEventListener('click', function(){
    game("p");
  });
  scissors_div.addEventListener('click', function(){
    game("s");
  });
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  if(userChoice === computerChoice){
    draw(userChoice, computerChoice);
  }else{
    switch(userChoice + computerChoice){
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
    }
  }
}
function convertToWord(letter){
  if(letter == 'r'){
    return 'Rock'
  }else if (letter == 'p'){
    return "Paper";
  }else{
    return 'Scissors';
  }

}
function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You Win!`;
}
function lose(user, computer){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You Lose!` ;
}
function draw(user, computer){
  result_p.innerHTML = `${convertToWord(user)} draws with ${convertToWord(computer)}`;
}
main();
