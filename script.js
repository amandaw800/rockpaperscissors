


function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3); // returns back 0, 1, 2

    //Each number represents a different move

    if(random == 0)
    {
        return "rock";
    }
    else if(random == 1)
    {
        return "paper";
    }
    else if(random == 2)
    {
        return "scissors";
    }
    
}



function getHumanChoice()
{
    //Get the choice from the user
    let choice = prompt("Rock, paper, or scissors?");
    return choice;

}





/**
 * Create a function playGame, which calls playRound 5 times
 * Move the score variables into playGame
 * 
 */
function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
{
    // Make humanChoice lowercase so it works for every input
    humanChoice = humanChoice.toLowerCase()

    //Make the variables for all the results
    let lose = "You lose! " + computerChoice + " beats " + humanChoice;
    let win = "You win! " + humanChoice + " beats " + computerChoice;
    let tie = "It's a tie!";

    //Check for all the win conditions
    if(humanChoice === "rock" && computerChoice === "paper")
    {
        computerScore +=1;
        return lose;
    }
    else if(humanChoice ==="paper" && computerChoice === "scissors")
    {
        computerScore+=1;
        return lose;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore+=1;
        return lose;
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore +=1;
        return win;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore +=1;
        return win;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore +=1;
        return win;
    }
    else if (humanChoice === computerChoice) {
        return tie;
    }
}

//Play the game 5 times
for( i =0; i < 5; i++)
{
let hum = getHumanChoice();
console.log(hum)
let comp = getComputerChoice();
console.log(comp);


res = playRound(hum, comp);
console.log(res);


}


}

playGame();

