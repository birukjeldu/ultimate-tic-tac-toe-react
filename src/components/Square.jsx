const Square = ({
  className,
  sVal,
  handleSqrClick,
  handleHover,
  handleHoverLeave,
}) => {
  return (
    <div
      className={`${className} w-14 h-14 p-4 border-gray-400 cursor-pointer`}
      onClick={handleSqrClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      <button>{sVal}</button>
    </div>
  );
};

export default Square;
