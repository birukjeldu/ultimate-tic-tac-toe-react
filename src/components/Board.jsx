import MiniBoard from "./MiniBoard";
import { useState } from "react";

const Board = ({ xTurn, miniBoard, onTurnChange }) => {
  const [boardIndex, setBoardIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  let bgActive = "bg-green-500 transition cursor-pointer";
  let boardDisabled = "opacity-65 pointer-events-none cursor-not-allowed";
  function changeBoardIndex(i) {
    setBoardIndex(i);
  }
  function hoverUpdate(i) {
    //console.log(i);
    setHoverIndex(i);
  }
  return (
    <div className=" p-4 grid grid-cols-3 align-middle">
      <div
        className={`border-2 border-black p-1 border-br-0 border-t-0 border-l-0 ${boardIndex != null ? (boardIndex == 0 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 0 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black border-t-0 ${boardIndex != null ? (boardIndex == 1 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 1 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-b-0 border-black border-t-0 border-r-0 ${boardIndex != null ? (boardIndex == 2 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 2 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black border-l-0 ${boardIndex != null ? (boardIndex == 3 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 3 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-br-0 border-black ${boardIndex != null ? (boardIndex == 4 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 4 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-b-0 border-black border-r-0 ${boardIndex != null ? (boardIndex == 5 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 5 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-r-0 border-black border-b-0 border-l-0 ${boardIndex != null ? (boardIndex == 6 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 6 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-r-0 border-black border-b-0 ${boardIndex != null ? (boardIndex == 7 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 7 ? bgActive : ""}`}
      >
        <MiniBoard
          updateIndex={changeBoardIndex}
          xTurn={xTurn}
          hoverUpdateIndex={hoverUpdate}
          onTurnChange={onTurnChange}
        />
      </div>
      <div
        className={`border-2 p-1 border-black border-b-0 border-r-0 ${boardIndex != null ? (boardIndex == 8 ? bgActive : boardDisabled) : ""} ${boardIndex != null && hoverIndex == 8 ? bgActive : ""}`}
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
