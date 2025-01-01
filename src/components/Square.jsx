const Square = ({ className, sVal, handleSqrClick, handleHover }) => {
  return (
    <div
      className={`${className} w-14 h-14 p-4 border-gray-300`}
      onClick={handleSqrClick}
      onMouseEnter={handleHover}
    >
      <button>{sVal}</button>
    </div>
  );
};

export default Square;
