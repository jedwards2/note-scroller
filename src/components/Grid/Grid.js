import Column from "../Column/Column";
import "./Grid.css";

function Grid({ gridState, columnBackgrounds, setBlock }) {
  return (
    <div className="grid">
      <Column
        columnState={gridState[0]}
        setBlock={setBlock}
        background={columnBackgrounds[0]}
      />
      <Column
        columnState={gridState[1]}
        setBlock={setBlock}
        background={columnBackgrounds[1]}
      />
      <Column
        columnState={gridState[2]}
        setBlock={setBlock}
        background={columnBackgrounds[1]}
      />
      <Column
        columnState={gridState[3]}
        setBlock={setBlock}
        background={columnBackgrounds[1]}
      />
    </div>
  );
}

export default Grid;
