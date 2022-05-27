import "./App.css";
import * as Tone from "tone";
import { useState } from "react";
import Grid from "./components/Grid/Grid";

function App() {
  const [count, setCount] = useState(0);
  const [gridBorders, setGridBorders] = useState([false, false, false, false]);
  const [gridState, setGridState] = useState([
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

  function stepForward() {
    setCount((prevCount) => prevCount + 1);

    setGridBorders((prevState) => {
      let index = count % gridState.length;
      let prevIndex = (count - 1) % gridState.length;
      let newState = [...prevState];
      newState[prevIndex] = !prevState[prevIndex];
      newState[index] = !prevState[index];
      console.log(newState);
      return newState;
    });
  }

  const synth = new Tone.Synth().toDestination();
  // const synth2 = new Tone.Synth().toDestination();
  let playNote = (note) => synth.triggerAttack(note);
  // // let playNote2 = (note) => synth2.triggerAttackRelease(note, "2n");
  // let stopNote = () => synth.triggerRelease();

  return (
    <div className="App">
      <button onClick={stepForward}>Play</button>
      <Grid
        gridState={gridState}
        gridBackgrounds={gridBorders}
        setBlock={setBlock}
      />
    </div>
  );
}

export default App;
