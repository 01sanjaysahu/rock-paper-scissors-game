/*
    JavaScript ka use game ko interactive banane ke liye hota hai.

    JavaScript yahan:
    1. Computer ki random choice banayega
    2. User aur computer ki choice compare karega
    3. Winner decide karega
    4. Score update karega
    5. Result screen par show karega
*/


// =============================
// Score Variables
// =============================

// User ka score initially 0 hai
let userScore = 0;

// Computer ka score initially 0 hai
let computerScore = 0;


// =============================
// Computer Choices
// =============================

// Computer ke paas ye 3 choices hain
const choices = ["rock", "paper", "scissors"];


// =============================
// Main Game Function
// =============================

function playGame(userChoice) {

    /*
        Math.random() ek random number generate karta hai.

        Math.floor() us number ko integer me convert karta hai.

        Iska use karke computer randomly
        rock, paper ya scissors select karega.
    */

    const randomIndex = Math.floor(Math.random() * choices.length);

    const computerChoice = choices[randomIndex];


    // User aur computer ki choice screen par show karna
    document.getElementById("user-choice").textContent = userChoice;

    document.getElementById("computer-choice").textContent = computerChoice;


    // Result element ko select karna
    const resultElement = document.getElementById("result");


    // =============================
    // Game Logic
    // =============================

    // Agar dono ki choice same hai
    if (userChoice === computerChoice) {

        resultElement.textContent = "🤝 It's a Tie!";

    }

    // User winning conditions
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||

        (userChoice === "scissors" && computerChoice === "paper") ||

        (userChoice === "paper" && computerChoice === "rock")
    ) {

        // User ka score 1 se increase
        userScore++;

        resultElement.textContent = "🎉 You Win!";

    }

    // Agar upar ki conditions false hain
    // to computer win karega
    else {

        // Computer ka score 1 se increase
        computerScore++;

        resultElement.textContent = "😢 You Lose!";
    }


    // =============================
    // Score Update
    // =============================

    // User ka updated score HTML me show karna
    document.getElementById("user-score").textContent = userScore;

    // Computer ka updated score HTML me show karna
    document.getElementById("computer-score").textContent = computerScore;
}


// =============================
// Reset Game Function
// =============================

function resetGame() {

    // Scores ko dobara 0 karna
    userScore = 0;
    computerScore = 0;


    // Screen par scores ko 0 show karna
    document.getElementById("user-score").textContent = "0";

    document.getElementById("computer-score").textContent = "0";


    // Purani choices ko remove karna
    document.getElementById("user-choice").textContent = "-";

    document.getElementById("computer-choice").textContent = "-";


    // Result ko initial message par set karna
    document.getElementById("result").textContent =
        "Make your choice!";
}