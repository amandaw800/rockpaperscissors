//Global variables to keep score for human and computer

var humanScore = 0;
var computerScore = 0;



// Returns a string representing rock, paper, or scissors and randomly generates one of those
function getComputerChoice()
{
    //1. get the random number from 1 to 3
    var rand  = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    

    //2. use that number and define the number into a string (rock = 1, paper = 2, scissors = 3 )
    //3. return that string


    if(rand == 3)
    {
        console.log("scissors")
        return "scissors"
    }
    else if(rand == 1)
    {
        console.log("rock")
        return "rock"
    }
    else {
        console.log("paper")
        return "paper"
    }
}

// ALlows user to input their choice in rock, paper and scissors
function getHumanChoice()
{

    // 1. get the prompt
    // 2. convert the move into lowercase so it doesnt matter how its typed in
    //3. check if rock -> return rock, if paper -> return paper, if scissors -> return scissors
    let choice = prompt("Choose your move (rock, paper, or scissors) ")

    if(choice.toLowerCase() == "rock")
    {
        console.log("rock")
        return "rock"
    }
    else if(choice.toLowerCase() == "paper")
    {
        console.log("paper")
        return "paper"
    }
    else {
        console.log("scissors")
        return "scissors"
    }


}

//Plays a round of rock paper scissors
function playRound(humanChoice, computerChoice)
{
    // Paper beats rock
    if(humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore += 1;
        console.log("You win! Paper beats rock!")

    }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore += 1;
        console.log("You lose! Paper beats rock!")
    }

    // Rock beats scissors
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        humanScore += 1;
        console.log("You win! Rock beats scissors!")
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        computerScore += 1;
        console.log("You lose! Rock beats scissors!")
    }

    // Scissors beats paper
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        humanScore += 1;
        console.log("You win! Scisssors beats paper!")
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore += 1;
        console.log("You lose! Scissors beats paper!")
    }
    else {
        console.log("It's a tie!")
    }

    //increment the score on whoever wins 

    //otherwise tie and score does not change. 

}

function playGame()
{
    /** 

    for(let i = 0; i < 5; i++)

        playRound(getHumanChoice(), getComputerChoice())

    }
        */

    //playRound(getHumanChoice(), getComputerChoice())

    if(humanScore > computerScore)
    {
        console.log("Humans have won!")
    }
    else if(humanScore < computerScore)
    {
        console.log("The computer has won!")

    }
    else {
        console.log("It's a tie!")
    }
    

}


/**
 * ----------------------
 */
//create the 3 buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//create the on-click for rock
rock.addEventListener("click", () =>{
    playRound("rock", getComputerChoice())


});

//create the on-click for paper
paper.addEventListener("click", () =>{

});

//create the on-click for scissors
scissors.addEventListener("click", () =>{

});



//playGame()
