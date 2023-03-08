function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[randomNumber = Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
        return 0;
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "scissors" && computerSelection == "paper"))
        return 1;
    else 
        return -1;
}

playerSelectionList = document.querySelectorAll(".player_selection");

let round = 0;
let win = 0, lose = 0, draw = 0;
result_div = document.querySelector(".result");
const result_round = document.createElement("h2");
const result_desc = document.createElement("p");
const result_point = document.createElement("p");
result_div.appendChild(result_round);
result_div.appendChild(result_desc);
result_div.appendChild(result_point);

playerSelectionList.forEach((playerSelection, index) => {
    playerSelection.addEventListener("click", () => {
        result_round.textContent = (`Round ${round++ + 1}`);
        if (index == 0)
            playerSelection = "rock";
        else if (index == 1)
            playerSelection = "paper";
        else 
            playerSelection = "scissors";
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 1:
                win++;
                result_desc.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
                break;
            case -1:
                lose++;
                result_desc.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            default: 
                draw++;
                result_desc.textContent = ("Draw :)");
        }

        result_point.textContent = (`Point: ${win}`);
        if (win == 5) {
            result_point.textContent = (`Point: ${win}. Game over!`);
        }
    });
});