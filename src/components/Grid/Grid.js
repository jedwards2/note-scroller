import Column from "../Column/Column";
import "./Grid.css";

function Grid({ gridState, setBlock, playNote }) {
  return (
    <div className="grid">
      <Column
        columnState={gridState[0]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <Column
        columnState={gridState[1]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <Column
        columnState={gridState[2]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <Column
        columnState={gridState[3]}
        setBlock={setBlock}
        playNote={playNote}
      />
    </div>
  );
}

export default Grid;
