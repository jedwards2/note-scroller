import "./App.css";
// import * as Tone from "tone";
import { useState } from "react";
import Grid from "./components/Grid/Grid";

function App() {
  const [clock, setClock] = useState({ state: false, count: 0 });
  const [columnBackgrounds, setColumnBackgrounds] = useState([
    true,
    false,
    false,
    false,
  ]);
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
  function activateClock() {
    // setClock((prevClock) => {
    //   let newClock = { ...prevClock };
    //   newClock["state"] = true;
    //   return newClock;
    // });

    setClock((prevClock) => {
      let newClock = { ...prevClock };
      newClock.count = prevClock["count"] + 1;
      return newClock;
    });

    setColumnBackgrounds((prevState) => {
      let index = clock.count % gridState.length;
      let newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  }

  // function stopClock() {
  //   setClock((prevClock) => {
  //     let newClock = { ...prevClock };
  //     newClock["state"] = false;
  //     return newClock;
  //   });
  // }
  console.log(columnBackgrounds);

  // const synth = new Tone.Synth().toDestination();
  // const synth2 = new Tone.Synth().toDestination();
  // let playNote = (note) => synth.triggerAttack(note);
  // // let playNote2 = (note) => synth2.triggerAttackRelease(note, "2n");
  // let stopNote = () => synth.triggerRelease();

  return (
    <div className="App">
      <button onClick={activateClock}>Start Clock</button>
      {/* <button onClick={stopClock}>Stop Clock</button> */}
      <Grid
        gridState={gridState}
        columnBackgrounds={columnBackgrounds}
        setBlock={setBlock}
      />
    </div>
  );
}

export default App;
