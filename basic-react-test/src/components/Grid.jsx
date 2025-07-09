import "../index.css";

const Grid = () => {
  const gridSize = 5;
  const cells = [];

  for (let i = 0; i < gridSize * gridSize; i++) {
    cells.push(
      <div key={i} className="grid-cell">
        {i}
      </div>
    );
  }
  return <div className="grid-container">{cells}</div>;
};

export default Grid;
