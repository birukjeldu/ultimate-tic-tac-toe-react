import MiniBoard from "./MiniBoard";
import { useState } from "react";

const Board = ({ xTurn, miniBoard, onTurnChange }) => {
  const [boardIndex, setBoardIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [square, setSquare] = useState(Array(9).fill(Array(9).fill(null)));
  const [miniBoardWinner, setMiniBoardWinner] = useState(Array(9).fill(null));

  let bgActive = "bg-gray-400/30 transition cursor-pointer";
  let bgHover = "bg-gray-400/30";
  let inActive = "opacity-45";
  let boardDisabled = "opacity-85 pointer-events-none cursor-not-allowed";
  function changeBoardIndex(i) {
    miniBoardWinner[i] == null ? setBoardIndex(i) : setBoardIndex(null);
  }
  function hoverUpdate(i) {
    setHoverIndex(i);
  }
  const handleSquareUpdate = (miniBoardIndex, squareIndex, value) => {
    setSquare((prevSquare) =>
      prevSquare.map((board, index) =>
        index === miniBoardIndex
          ? board.map((s, i) => (i === squareIndex ? value : s))
          : board,
      ),
    );

    // Calculate the winner for the updated mini-board
    setMiniBoardWinner((prevWinners) =>
      prevWinners.map((winner, index) => {
        if (index === miniBoardIndex) {
          const updatedMiniBoard = square[miniBoardIndex].map((s, i) =>
            i === squareIndex ? value : s,
          );
          return calculateWinner(updatedMiniBoard) || winner; // Preserve the winner if already decided
        }
        return winner;
      }),
    );
  };

  let gameWinner = calculateWinner(miniBoardWinner);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    // Check for a tie
    if (squares.every((square) => square !== null)) {
      return "Tie";
    }
    return null;
  }
  function resetGame() {
    setBoardIndex(null);
    setHoverIndex(null);
    setSquare(Array(9).fill(Array(9).fill(null)));
    setMiniBoardWinner(Array(9).fill(null));
  }
  return (
    <div className="relative p-4 grid grid-cols-3 align-middle">
      <div
        className={`${gameWinner == null ? "hidden" : ""} flex justify-center backdrop-blur-xs  p-2 z-50 absolute inset-0`}
      >
        <div className="relative flex h-full flex-col overflow-hidden items-center transition justify-center">
          <div className="p-4 px-10 flex flex-col gap-2 justify-evenly backdrop-blur-xl">
            <span
              className={`drop-shadow-xl text-black text-5xl font-bold flex justify-center items-center inset-0`}
            >
              {gameWinner == "Tie" ? "Tie" : `Winner {${gameWinner}}`}
            </span>
            <button
              onClick={() => resetGame()}
              className=" border-2 bg-white border-black p-3 mt-3 text-center drop-shadow-xl text-xl hover:invert  font-bold text-black"
            >
              New Game
            </button>
          </div>
          <div className="pointer-events-none shadow ring-1 ring-black/5 lg:rounded-[5px]"></div>
        </div>
      </div>

      <div
        className={` border-2 border-black p-1 relative overflow-hidden border-br-0 border-t-0 border-l-0 
                ${boardIndex != null ? (boardIndex == 0 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 0 ? bgHover : ""} 
                ${miniBoardWinner[0] != null ? inActive : ""}`}
      >
        {miniBoardWinner[0] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[0]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[0]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(0, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-br-0 border-black border-t-0 
                ${boardIndex != null ? (boardIndex == 1 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 1 ? bgHover : ""}
                ${miniBoardWinner[1] != null ? inActive : ""}`}
      >
        {miniBoardWinner[1] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[1]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[1]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(1, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-b-0 border-black border-t-0 border-r-0 
                ${boardIndex != null ? (boardIndex == 2 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 2 ? bgHover : ""}
                ${miniBoardWinner[2] != null ? inActive : ""}`}
      >
        {miniBoardWinner[2] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[2]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[2]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(2, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-br-0 border-black border-l-0 
                ${boardIndex != null ? (boardIndex == 3 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 3 ? bgHover : ""}
                ${miniBoardWinner[3] != null ? inActive : ""}`}
      >
        {miniBoardWinner[3] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[3]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[3]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(3, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-br-0 border-black 
                ${boardIndex != null ? (boardIndex == 4 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 4 ? bgHover : ""}
                ${miniBoardWinner[4] != null ? inActive : ""}`}
      >
        {miniBoardWinner[4] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[4]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[4]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(4, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-b-0 border-black border-r-0 
                ${boardIndex != null ? (boardIndex == 5 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 5 ? bgHover : ""}
                ${miniBoardWinner[5] != null ? inActive : ""}`}
      >
        {miniBoardWinner[5] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[5]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[5]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(5, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-r-0 border-black border-b-0 border-l-0 
                ${boardIndex != null ? (boardIndex == 6 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 6 ? bgHover : ""}
                ${miniBoardWinner[6] != null ? inActive : ""}`}
      >
        {miniBoardWinner[6] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[6]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[6]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(6, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-r-0 border-black border-b-0 
                ${boardIndex != null ? (boardIndex == 7 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 7 ? bgHover : ""}
                ${miniBoardWinner[7] != null ? inActive : ""}`}
      >
        {miniBoardWinner[7] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[7]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[7]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(7, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 relative overflow-hidden border-black border-b-0 border-r-0 
                ${boardIndex != null ? (boardIndex == 8 ? bgActive : boardDisabled) : ""} 
                ${boardIndex != null && hoverIndex == 8 ? bgHover : ""}
                ${miniBoardWinner[8] != null ? inActive : ""}`}
      >
        {miniBoardWinner[8] != null ? (
          <span className="absolute text-black/95 text-9xl font-bold inset-0 flex justify-center items-center scale-150 transition delay-700 text-center">
            {miniBoardWinner[8]}
          </span>
        ) : (
          ""
        )}
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          square={square[8]}
          onSquareUpdate={(squareIndex, value) =>
            handleSquareUpdate(8, squareIndex, value)
          }
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
    </div>
  );
};

export default Board;
