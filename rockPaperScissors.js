        // Rock paper scissors game //

        //get User input
        function getUserChoice() {
            let userInput = prompt(`Please pick either rock (R), paper (P) or scissors (S): `);
            userInput = userInput.toLowerCase();
            const correctInput = ["r", "p", "s"];
            let inputVerify = correctInput.includes(userInput);

            //check if user input is correct (either r, p or s) - if not then keeps asking for correct input
            while (!inputVerify) {
                userInput = prompt(`Wrong entry. Please pick either rock (R), paper (P) or scissors (S):`);
                userInput = userInput.toLowerCase();
                inputVerify = correctInput.includes(userInput);
            }
            return convertToRealWords(userInput); //if user input is correct, calls function taht converts user one-letter input to full word to make the code easier to read
        }

        // get the computer's choice of either Rock, Paper or Scissors, randomly
        function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            let randomNumber = Math.floor(Math.random() * 3);
            return choices[randomNumber];
        }

        //convert to words rock, paper, scissors for code readability
        function convertToRealWords(userInput) {
            switch (userInput) {
                case "r":
                    userInput = "rock";
                    break;
                case "p":
                    userInput = "paper";
                    break;
                case "s":
                    userInput = "scissors";
                    break;
            }
            return userInput;
        }

        // play one round
        function playRound() {
            const userChoice = getUserChoice(); //runs function asking for user input
            const computerChoice = getComputerChoice(); //runs fuction getting random computer input
            const userChoiceMsg = `Player  : ${userChoice.toUpperCase()}`
            const computerChoiceMsg = `Computer: ${computerChoice.toUpperCase()}`

            // check whether it's a tie
            if (userChoice === computerChoice) {
                console.log(userChoiceMsg);
                console.log(computerChoiceMsg);
                console.log(`>>It's a tie!`);
                return "TIE";
            }

            // else if to check if user have won the round
            else if (
                (userChoice === "scissor" && computerChoice === "paper")
                || (userChoice === "paper" && computerChoice === "rock")
                || (userChoice === "rock" && computerChoice === "scissors")
            ) {
                console.log(userChoiceMsg);
                console.log(computerChoiceMsg);
                console.log(`>>You WIN this round!`);
                return "USER_WIN";
            }

            // else computer wins. Could consider adding another else if statement with computer win logic and an else clause in case there's any 'mishaps' in the code
            else {
                console.log(userChoiceMsg);
                console.log(computerChoiceMsg);
                console.log(`>>You LOSE this round!`);
                return "COMPUTER_WIN";
            }
        }

        // play game
        function playGame() {
            let userWins = 0;
            let computerWins = 0;
            let round = 1;
            console.log("--------------------------------");
            console.log("Let's play Rock, Paper, Scissors!");
            while (round < 100) { //sets an arbitrary high number for rounds to avoid infinite loop. Could just be set to 'true' but think this is more appropiate
                console.log("--------------------------------");
                console.log(`Round ${round}:`);
                let roundWinner = playRound(); //calls the function for running a round of rock, paper, scissors, and stores the winner in roundWinner variable

                //increments number of user wins or computer wins round is not a tie
                switch (roundWinner) {
                    case "TIE":
                        break;
                    case "USER_WIN":
                        userWins++;
                        break;
                    case "COMPUTER_WIN":
                        computerWins++;
                        break;
                }
                console.log(`Player ${userWins} | ${computerWins} Computer`);

                // stops game when user or computer have accumulated 3 wins
                if (userWins === 3) {
                    const winMessage = `>>>>>>YOU WIN!!<<<<<<< (after ${round} rounds..)`;
                    return console.log(winMessage);
                }
                else if (computerWins === 3) {
                    const winMessage = `>>>>>>YOU LOOSE!!<<<<<<< (after ${round} rounds..)`;
                    return console.log(winMessage);
                }
                else {
                    round++; //increments the number of rounds
                }
            }
        }