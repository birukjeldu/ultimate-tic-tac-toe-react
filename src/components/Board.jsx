import MiniBoard from "./MiniBoard";
import { useState } from "react";

const Board = ({ xTurn, miniBoard, onTurnChange }) => {
  const [boardIndex, setBoardIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [square, setSquare] = useState(Array(9).fill(Array(9).fill(null)));

  let bgActive = "bg-gray-400/30 transition cursor-pointer";
  let bgHover = "bg-gray-400/30";
  let boardDisabled = "opacity-85 pointer-events-none cursor-not-allowed";
  function changeBoardIndex(i) {
    setBoardIndex(i);
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
  };

  console.log(square);
  return (
    <div className=" p-4 grid grid-cols-3 align-middle">
      <div
        className={`border-2 border-black p-1 border-br-0 border-t-0 border-l-0 ${boardIndex != null ? (boardIndex == 0 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 0 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-br-0 border-black border-t-0 ${boardIndex != null ? (boardIndex == 1 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 1 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-b-0 border-black border-t-0 border-r-0 ${boardIndex != null ? (boardIndex == 2 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 2 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-br-0 border-black border-l-0 ${boardIndex != null ? (boardIndex == 3 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 3 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-br-0 border-black ${boardIndex != null ? (boardIndex == 4 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 4 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-b-0 border-black border-r-0 ${boardIndex != null ? (boardIndex == 5 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 5 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-r-0 border-black border-b-0 border-l-0 ${boardIndex != null ? (boardIndex == 6 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 6 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-r-0 border-black border-b-0 ${boardIndex != null ? (boardIndex == 7 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 7 ? bgHover : ""}`}
      >
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
        className={`border-2 p-1 border-black border-b-0 border-r-0 ${boardIndex != null ? (boardIndex == 8 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 8 ? bgHover : ""}`}
      >
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
