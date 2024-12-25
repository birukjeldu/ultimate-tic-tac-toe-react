const Game = () => {
  return (
    <div className="bg-gray-50 py-10 sm:py-10">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Deploy faster
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Ultimate Tic Tac Toe
        </p>
        <div className="relative flex justify-center lg:grid-cols-2  mx-auto max-w-7xl mt-6 ">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="p-4 px-10 flex gap-10 justify-evenly">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Performance
              </p>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Performance
              </p>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Performance
              </p>
            </div>
            <div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 lg:rounded-[5px]"></div>
          </div>
        </div>
        <div className="mt-4 grid gap-1 sm:mt-4 lg:grid-cols-1 ">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 text-red-500 p-4 grid grid-cols-3 align-middle">
                <div className="border-2 p-4 border-br-0">1</div>
                <div className="border-2 p-4 border-br-0">2</div>
                <div className="border-2 p-4 border-b-0">3</div>
                <div className="border-2 p-4 border-br-0">4</div>
                <div className="border-2 p-4 border-br-0">5</div>
                <div className="border-2 p-4 border-b-0">6</div>
                <div className="border-2 p-4 border-r-0">7</div>
                <div className="border-2 p-4 border-r-0">8</div>
                <div className="border-2 p-4">9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
