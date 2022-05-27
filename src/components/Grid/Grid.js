import Column from "../Column/Column";
import "./Grid.css";

function Grid({ gridState, gridBackgrounds, setBlock }) {
  return (
    <div className="grid">
      <Column
        columnState={gridState[0]}
        setBlock={setBlock}
        background={gridBackgrounds[0]}
      />
      <Column
        columnState={gridState[1]}
        setBlock={setBlock}
        background={gridBackgrounds[1]}
      />
      <Column
        columnState={gridState[2]}
        setBlock={setBlock}
        background={gridBackgrounds[2]}
      />
      <Column
        columnState={gridState[3]}
        setBlock={setBlock}
        background={gridBackgrounds[3]}
      />
    </div>
  );
}

export default Grid;
