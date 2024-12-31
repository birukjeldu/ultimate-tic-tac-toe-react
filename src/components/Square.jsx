const Square = ({ className, sVal, handleSqrClick }) => {
  return (
    <div
      className={`${className} w-14 h-14 p-4 border-gray-300 cursor-pointer`}
      onClick={handleSqrClick}
    >
      <button>{sVal}</button>
    </div>
  );
};

export default Square;
