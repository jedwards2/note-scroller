import Column from "../Column/Column";
import { useState } from "react";

import "./Grid.css";

function Grid() {
  let [gridState, setGridState] = useState([
    [
      { state: false, id: 0 },
      { state: false, id: 1 },
      { state: false, id: 2 },
      { state: false, id: 3 },
    ],
    [
      { state: false, id: 4 },
      { state: false, id: 5 },
      { state: false, id: 6 },
      { state: false, id: 7 },
    ],
    [
      { state: false, id: 8 },
      { state: false, id: 9 },
      { state: false, id: 10 },
      { state: false, id: 11 },
    ],
    [
      { state: false, id: 12 },
      { state: false, id: 13 },
      { state: false, id: 14 },
      { state: false, id: 15 },
    ],
  ]);

  function setBlock(id) {
    setGridState((prevState) => {
      const newState = [];
      for (let i = 0; i < prevState.length; i++) {
        let column = [];
        for (let q = 0; q < prevState[i].length; q++) {
          if (prevState[i][q].id === id) {
            column.push({
              state: !prevState[i][q].state,
              id: id,
            });
          } else {
            column.push(prevState[i][q]);
          }
        }
        newState.push(column);
      }
      return newState;
    });
  }

  return (
    <div className="grid">
      <Column columnState={gridState[0]} setBlock={setBlock} />
      <Column columnState={gridState[1]} setBlock={setBlock} />
      <Column columnState={gridState[2]} setBlock={setBlock} />
      <Column columnState={gridState[3]} setBlock={setBlock} />
    </div>
  );
}

export default Grid;
