import MiniBoard from "./MiniBoard";
import { useState } from "react";

const Board = ({ xTurn, miniBoard, onTurnChange }) => {
  const [boardIndex, setBoardIndex] = useState(null);
  let bgActive = "bg-green-500 transition cursor-pointer";
  let boardDisabled = "opacity-65 pointer-events-none cursor-not-allowed";
  function changeBoardIndex(i) {
    setBoardIndex(i);
  }
  function hoverUpdate(i) {
    console.log(i);
  }
  return (
    <div className=" p-4 grid grid-cols-3 align-middle">
      <div
        className={`border-2 border-black p-1 border-br-0 border-t-0 border-l-0 ${boardIndex != null ? (boardIndex == 0 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black border-t-0 ${boardIndex != null ? (boardIndex == 1 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-b-0 border-black border-t-0 border-r-0 ${boardIndex != null ? (boardIndex == 2 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black border-l-0 ${boardIndex != null ? (boardIndex == 3 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black ${boardIndex != null ? (boardIndex == 4 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-b-0 border-black border-r-0 ${boardIndex != null ? (boardIndex == 5 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-r-0 border-black border-b-0 border-l-0 ${boardIndex != null ? (boardIndex == 6 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-r-0 border-black border-b-0 ${boardIndex != null ? (boardIndex == 7 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-black border-b-0 border-r-0 ${boardIndex != null ? (boardIndex == 8 ? bgActive : boardDisabled) : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
    </div>
  );
};

export default Board;
