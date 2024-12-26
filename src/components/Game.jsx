import Board from "./Board";
const Game = () => {
  return (
    <div className="bg-gray-50 py-10 sm:py-10">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Ultimate Tic Tac Toe
        </p>
        <div className="relative flex justify-center lg:grid-cols-2  mx-auto max-w-7xl mt-6 ">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="p-4 px-10 flex gap-10 justify-evenly">
              <button className="mt-2 text-center text-base/7 font-semibold text-green-600">
                New Game
              </button>

              <h2 className=" mt-2 text-center text-base/7 font-semibold text-indigo-600">
                Next Player <span className="text-gray-800 font-bold">: X</span>
              </h2>
            </div>
            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 lg:rounded-[5px]"></div>
          </div>
        </div>
        <div className="mt-4 flex justify-center sm:mt-4 ">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <Board />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
