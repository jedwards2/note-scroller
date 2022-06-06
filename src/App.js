import "./App.css";
import { useState, useEffect } from "react";
import * as Tone from "tone";
import Grid from "./components/Grid/Grid";
import play from "./images/play.png";
import pause from "./images/pause.png";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [gridBorders, setGridBorders] = useState([false, false, false, false]);
  const [gridState, setGridState] = useState([
    [
      { state: false, id: 0, note: "C2" },
      { state: false, id: 1, note: "G2" },
      { state: false, id: 2, note: "D3" },
      { state: false, id: 3, note: "A3" },
    ],
    [
      { state: false, id: 4, note: "C2" },
      { state: false, id: 5, note: "G2" },
      { state: false, id: 6, note: "D3" },
      { state: false, id: 7, note: "A3" },
    ],
    [
      { state: false, id: 8, note: "C2" },
      { state: false, id: 9, note: "G2" },
      { state: false, id: 10, note: "D3" },
      { state: false, id: 11, note: "A3" },
    ],
    [
      { state: false, id: 12, note: "C2" },
      { state: false, id: 13, note: "G2" },
      { state: false, id: 14, note: "D3" },
      { state: false, id: 15, note: "A3" },
    ],
  ]);

  useEffect(() => {
    const loop = new Tone.Loop((time) => {
      setCount((prevCount) => prevCount + 1);

      setGridBorders((prevState) => {
        let index = count % gridState.length;
        let prevIndex = (count - 1) % gridState.length;
        let newState = [...prevState];
        newState[prevIndex] = !prevState[prevIndex];
        newState[index] = !prevState[index];
        return newState;
      });
    }, "4n");

    loop.start(0);

    return () => {
      loop.dispose();
    };
  });

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  function playNote(note, time) {
    synth.triggerAttackRelease(note, "8n", time);
  }

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
              note: prevState[i][q].note,
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

  function switchRunning() {
    if (!running) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
    setRunning((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div className="synthesizer-div">
        <div className="synth-header">
          <h1>Sequencer</h1>
          <div onClick={switchRunning} className="play-pauseButton">
            {running ? (
              <img src={pause} alt="pause" className="buttonImg"></img>
            ) : (
              <img src={play} alt="play" className="buttonImg"></img>
            )}
          </div>
        </div>
        <Grid
          gridState={gridState}
          gridBackgrounds={gridBorders}
          setBlock={setBlock}
          playNote={playNote}
        />
      </div>
    </div>
  );
}

export default App;
