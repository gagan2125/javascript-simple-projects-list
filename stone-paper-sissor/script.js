document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const resultText = document.getElementById("resultText");

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.id;
      const computerChoice = getComputerChoice();
      const result = getResult(userChoice, computerChoice);
      resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    });
  });
});
