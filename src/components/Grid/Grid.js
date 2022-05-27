import Column from "../Column/Column";
import "./Grid.css";

function Grid({ gridState, gridBackgrounds, setBlock, playNote }) {
  return (
    <div className="grid">
      <Column
        columnState={gridState[0]}
        setBlock={setBlock}
        background={gridBackgrounds[0]}
        playNote={playNote}
      />
      <Column
        columnState={gridState[1]}
        setBlock={setBlock}
        background={gridBackgrounds[1]}
        playNote={playNote}
      />
      <Column
        columnState={gridState[2]}
        setBlock={setBlock}
        background={gridBackgrounds[2]}
        playNote={playNote}
      />
      <Column
        columnState={gridState[3]}
        setBlock={setBlock}
        background={gridBackgrounds[3]}
        playNote={playNote}
      />
    </div>
  );
}

export default Grid;
