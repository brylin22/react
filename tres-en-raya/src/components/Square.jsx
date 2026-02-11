export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  // return <div className={className}>{children}</div>;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <>
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    </>
  );
};
