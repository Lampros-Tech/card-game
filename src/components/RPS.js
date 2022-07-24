import { useEffect, useState } from "react";
import "./RPS.css";
import { FaRedo } from "react-icons/fa";
import Rock from "./images/rock1.png";
import Paper from "./images/paper1.png";
import Scissor from "./images/scissors1.png";

const RPS = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];
  const images = [
    { img: Rock, name: "rock" },
    { img: Paper, name: "paper" },
    { img: Scissor, name: "scissors" },
  ];

  const startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: images[Math.floor(Math.random() * images.length)],
        winner: "",
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner(),
        });
      }
    }, 100);
  };

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors</h1>
      <div className="score">
        <h1 className="text-bg">
          User Points <br /> {userPoints}
        </h1>
        <h1 className="text-bg">
          Computer Points <br /> {computerPoints}
        </h1>
      </div>

      <div className="choice">
        <div className="choice-user">
          <img
            className="user-hand"
            src={`./images/${userChoice}.png`}
            alt=""
          ></img>
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`./images/${computerChoice}.png`}
            alt=""
          ></img>
        </div>
      </div>

      <div className="button-div">
        {images.map((image, index) => (
          <img
            key={index}
            onClick={() => {
              handleClick(image.name);
              startGame();
            }}
            disabled={gameOver}
            src={image.img}
            alt={`image${index}`}
            height={"50px"}
            width={"50px"}
          />
        ))}
      </div>

      <div className="result">
        <h1 className="text-bg">
          Turn Result <br /> {turnResult}
        </h1>
        <h1 className="text-bg">
          Final Result <br /> {result}
        </h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="restart-button" onClick={() => reset()}>
            <FaRedo />
          </button>
        )}
      </div>
    </div>
  );
};

export default RPS;
