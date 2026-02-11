import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS, WINNER_COMBOS } from "./constants";
import { checkWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square !== null); // si todas las squeare del array new board tienen que el square es diferente a null
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return; // si la posicion tiene algo, salte. no hagas nad.

    //Actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      // alert(`El ganador es ${newWinner}`);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };
  const observar = () => {
    setWinner(null);
  };

  return (
    <>
      <main className="board">
        <h1>Tres en raya</h1>
        <button onClick={resetGame}>Reset</button>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <section>
          <WinnerModal
            resetGame={resetGame}
            winner={winner}
            observar={observar}
          />
        </section>
      </main>
    </>
  );
}

export default App;
