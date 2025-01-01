import { useState } from "react";
import Square from "./Square";

const MiniBoard = ({ xTurn, onTurnChange, updateIndex, hoverUpdateIndex }) => {
  const [square, setSquare] = useState(Array(9).fill(null));

  const sqrClick = (i) => {
    if (square[i] == null) {
      xTurn ? (square[i] = "X") : (square[i] = "O");
      onTurnChange(!xTurn);
      updateIndex(i);
    }
  };
  return (
    <div className="grid grid-cols-3 p-2 border-0 border-red-900 align-middle text-gray-900 text-xl font-bold">
      <Square
        sVal={square[0]}
        handleHover={() => hoverUpdateIndex(0)}
        handleSqrClick={() => sqrClick(0)}
        className="border-2 p-4 border-br-0 border-t-0 border-l-0 border-gray-300"
      />

      <Square
        sVal={square[1]}
        handleHover={() => hoverUpdateIndex(1)}
        handleSqrClick={() => sqrClick(1)}
        className="border-2 p-4 border-br-0 border-t-0 border-gray-300"
      />

      <Square
        sVal={square[2]}
        handleSqrClick={() => sqrClick(2)}
        handleHover={() => hoverUpdateIndex(2)}
        className="border-2 p-4 border-b-0 border-t-0 border-r-0 border-gray-300"
      />

      <Square
        sVal={square[3]}
        handleHover={() => hoverUpdateIndex(3)}
        handleSqrClick={() => sqrClick(3)}
        className="border-2 p-4 border-br-0 border-l-0 border-gray-300"
      />

      <Square
        sVal={square[4]}
        handleHover={() => hoverUpdateIndex(4)}
        handleSqrClick={() => sqrClick(4)}
        className="border-2 p-4 border-br-0 border-gray-300"
      />

      <Square
        sVal={square[5]}
        handleHover={() => hoverUpdateIndex(5)}
        handleSqrClick={() => sqrClick(5)}
        className="border-2 p-4 border-b-0 border-r-0 border-gray-300"
      />

      <Square
        sVal={square[6]}
        handleHover={() => hoverUpdateIndex(6)}
        handleSqrClick={() => sqrClick(6)}
        className="border-2 p-4 border-r-0 border-l-0 border-b-0 border-gray-300"
      />

      <Square
        sVal={square[7]}
        handleHover={() => hoverUpdateIndex(7)}
        handleSqrClick={() => sqrClick(7)}
        className="border-2 p-4 border-r-0 border-b-0 border-gray-300"
      />

      <Square
        sVal={square[8]}
        handleHover={() => hoverUpdateIndex(8)}
        handleSqrClick={() => sqrClick(8)}
        className="border-2 p-4 border-r-0 border-b-0 border-gray-300"
      />
    </div>
  );
};

export default MiniBoard;
