import React, { useState } from "react";

import { Button, Input, Box, Container, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../style/style.css";

function NumberGuessingGame() {
  //this is the variable area
  const [numGuesses, setNumGuesses] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState("Welcome to the guessing game!");
  const [guess, setGuess] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [guessDisabled, setGuessDisabled] = useState(true);
  //this is the function area
  function startGame() {
    var randomDecimalBetweenZeroAndOne = Math.random();
    var randomDecimalBetweenZeroAndMax = randomDecimalBetweenZeroAndOne * 100;
    var randomIntegerBetweenZeroAndMax = Math.floor(
      randomDecimalBetweenZeroAndMax
    );
    setRandomNumber(randomIntegerBetweenZeroAndMax);
    setAttempt(1);
    setGuessDisabled(false);
    setMessage("I am thinking of a number between one and a hundred! 🤯");
  }
  function handleGuess() {
    if (randomNumber === guess) {
      setMessage("YOU WIN 👍");
      setGuessDisabled(true);
    }
    if (randomNumber > guess) {
      setMessage("it's higher than that 📈");
    }
    if (randomNumber < guess) {
      setMessage("it's lower than that 📉");
    }
    setAttempt(attempt + 1);
    if (attempt > numGuesses) {
      setGuessDisabled(true);
      setMessage("YOU LOSE 🤬");
    }
  }
  return (
    <>
      <Header />
      <Box bgColor={"#31363b"}>
        <Container maxWidth={800}>
          <Box className="App" padding="16px">
            <Text> How many guesses?</Text>
            <Input
              backgroundColor={"white"}
              marginY="16px"
              onChange={function (event) {
                setNumGuesses(Number(event.target.value));
              }}
              type="number"
            />{" "}
            <Button marginY="16px" colorScheme="red" onClick={startGame}>
              Start Game
            </Button>
            <Text> {message} </Text>
            <Text> Guess number:{attempt} </Text>
            <Text> Your Guess: </Text>{" "}
            <Input
              backgroundColor={"white"}
              marginY="16px"
              onChange={(event) => {
                setGuess(Number(event.target.value));
              }}
              type="Number"
            />{" "}
            <Button
              marginY="16px"
              colorScheme="red"
              disabled={guessDisabled}
              onClick={handleGuess}
            >
              Guess
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default NumberGuessingGame;
