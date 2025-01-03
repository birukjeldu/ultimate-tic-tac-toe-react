import { useState } from "react";
import Square from "./Square";

const MiniBoard = ({
  xTurn,
  square,
  onTurnChange,
  updateIndex,
  onSquareUpdate,
  hoverUpdateIndex,
}) => {
  const sqrClick = (i) => {
    if (square[i] == null) {
      let val = xTurn ? "X" : "O";
      onSquareUpdate(i, val);
      onTurnChange(!xTurn);
      updateIndex(i);
      console.log(square);
    }
  };

  //let winner = calculateWinner(square);

  return (
    <div className="grid grid-cols-3 p-2 border-0 border-red-900 align-middle text-gray-900 text-xl font-bold">
      <Square
        sVal={square[0]}
        handleHover={() => hoverUpdateIndex(0)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(0)}
        className="border-2 p-4 border-br-0 border-t-0 border-l-0 border-gray-300"
      />

      <Square
        sVal={square[1]}
        handleHover={() => hoverUpdateIndex(1)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(1)}
        className="border-2 p-4 border-br-0 border-t-0 border-gray-300"
      />

      <Square
        sVal={square[2]}
        handleSqrClick={() => sqrClick(2)}
        handleHover={() => hoverUpdateIndex(2)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        className="border-2 p-4 border-b-0 border-t-0 border-r-0 border-gray-300"
      />

      <Square
        sVal={square[3]}
        handleHover={() => hoverUpdateIndex(3)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(3)}
        className="border-2 p-4 border-br-0 border-l-0 border-gray-300"
      />

      <Square
        sVal={square[4]}
        handleHover={() => hoverUpdateIndex(4)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(4)}
        className="border-2 p-4 border-br-0 border-gray-300"
      />

      <Square
        sVal={square[5]}
        handleHover={() => hoverUpdateIndex(5)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(5)}
        className="border-2 p-4 border-b-0 border-r-0 border-gray-300"
      />

      <Square
        sVal={square[6]}
        handleHover={() => hoverUpdateIndex(6)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(6)}
        className="border-2 p-4 border-r-0 border-l-0 border-b-0 border-gray-300"
      />

      <Square
        sVal={square[7]}
        handleHover={() => hoverUpdateIndex(7)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(7)}
        className="border-2 p-4 border-r-0 border-b-0 border-gray-300"
      />

      <Square
        sVal={square[8]}
        handleHover={() => hoverUpdateIndex(8)}
        handleHoverLeave={() => hoverUpdateIndex(null)}
        handleSqrClick={() => sqrClick(8)}
        className="border-2 p-4 border-r-0 border-b-0 border-gray-300"
      />
    </div>
  );
};

export default MiniBoard;
