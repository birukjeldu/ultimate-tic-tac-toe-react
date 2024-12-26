import Square from "./Square";

const MiniBoard = () => {
  return (
    <div className="grid grid-cols-3 p-2 border-0 border-red-900 align-middle text-gray-900 text-xl font-bold">
      <Square className="border-2 p-4 border-br-0 border-t-0 border-l-0 border-gray-300" />

      <Square className="border-2 p-4 border-br-0 border-t-0 border-gray-300" />

      <Square className="border-2 p-4 border-b-0 border-t-0 border-r-0 border-gray-300" />

      <Square className="border-2 p-4 border-br-0 border-l-0 border-gray-300" />

      <Square className="border-2 p-4 border-br-0 border-gray-300" />

      <Square className="border-2 p-4 border-b-0 border-r-0 border-gray-300" />

      <Square className="border-2 p-4 border-r-0 border-l-0 border-b-0 border-gray-300" />

      <Square className="border-2 p-4 border-r-0 border-b-0 border-gray-300" />

      <Square className="border-2 p-4 border-r-0 border-b-0 border-gray-300" />
    </div>
  );
};

export default MiniBoard;
