import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>
      <h1 className="game-points">Card Game</h1>
      <Container>
        <div className="sub-header">
          <h1 className="moves">
            <h1 className="bold">Moves</h1>
            {moves}
          </h1>
          <div className="reshuffle">
            <button className="reset-button" onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          {localStorage.getItem("bestScore") && (
            <h1 className="high-score">
              <h1 className="bold">Best Score</h1>
              {bestScore}
            </h1>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
