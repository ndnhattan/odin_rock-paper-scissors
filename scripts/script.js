function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock")
            return -1;
        else if (computerSelection == "scissors")
            return 11;
        else 
            return 01;
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper")
            return -1;
        else if (computerSelection == "rock")
            return 12;
        else 
            return 02;
    } else if (playerSelection == "scissors") {
        if (computerSelection == "scissors")
            return -1;
        else if (computerSelection == "paper")
            return 13;
        else 
            return 03;
    }
}

function game() {
    let win = 0, lose = 0, draw = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let playerSelection;
        do {
            playerSelection = prompt("Enter your choice: ", "rock/paper/scissors");
        } while (playerSelection.toLocaleLowerCase() != "rock" && playerSelection.toLocaleLowerCase() != "paper" && playerSelection.toLocaleLowerCase() != "scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 11:
            case 12:
            case 13:
                win++;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case 01:
            case 02:
            case 03:
                lose++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            default: 
                draw++;
                console.log("Draw. :)");
        }
    }

    if (win > lose) {
        console.log(`Congratulation!!! You Win with ${win} win, ${lose} lose`);
    } else if (win < lose) {
        console.log(`Sorry. You Lose with ${win} win and ${lose} lose`);
    } else {
        console.log(`Wow. You draw with ${win} win and ${lose} lose`);
    }
}

game();