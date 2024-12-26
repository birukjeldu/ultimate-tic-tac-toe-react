import MiniBoard from "./MiniBoard";

const Board = () => {
  return (
    <div className=" p-4 grid grid-cols-3 align-middle">
      <div className="border-2 border-black p-1 border-br-0 border-t-0 border-l-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-br-0 border-black border-t-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-b-0 border-black border-t-0 border-r-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-br-0 border-black border-l-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-br-0 border-black">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-b-0 border-black border-r-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-r-0 border-black border-b-0 border-l-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-r-0 border-black border-b-0">
        <MiniBoard />
      </div>
      <div className="border-2 p-1 border-black border-b-0 border-r-0">
        <MiniBoard />
      </div>
    </div>
  );
};

export default Board;
