import Column from "../Column/Column";
import "./Grid.css";

function Grid({ gridState, setBlock, playNote }) {
  const columns = gridState.map((array, idx) => {
    return (
      <Column
        columnState={array}
        setBlock={setBlock}
        playNote={playNote}
        key={`array + ${idx}`}
      ></Column>
    );
  });

  return <div className="grid">{columns}</div>;
}

export default Grid;
