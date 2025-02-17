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


getHumanChoice()
getComputerChoice()