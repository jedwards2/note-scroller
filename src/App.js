import "./App.css";
import { useState, useEffect } from "react";
import * as Tone from "tone";
import Grid from "./components/Grid/Grid";
import play from "./images/play.png";
import pause from "./images/pause.png";
import CircularSlider from "@fseehawer/react-circular-slider";

function App() {
  const [count, setCount] = useState(0);
  const [tempo, setTempo] = useState(60);
  const [running, setRunning] = useState(false);
  const [gridState, setGridState] = useState([
    [
      { state: false, id: 0, note: "G3", borderActive: true },
      { state: false, id: 1, note: "F3", borderActive: true },
      { state: false, id: 2, note: "E3", borderActive: true },
      { state: false, id: 3, note: "C3", borderActive: true },
    ],
    [
      { state: false, id: 4, note: "G3", borderActive: false },
      { state: false, id: 5, note: "F3", borderActive: false },
      { state: false, id: 6, note: "E3", borderActive: false },
      { state: false, id: 7, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 8, note: "G3", borderActive: false },
      { state: false, id: 9, note: "F3", borderActive: false },
      { state: false, id: 10, note: "E3", borderActive: false },
      { state: false, id: 11, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 12, note: "G3", borderActive: false },
      { state: false, id: 13, note: "F3", borderActive: false },
      { state: false, id: 14, note: "E3", borderActive: false },
      { state: false, id: 15, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 16, note: "G3", borderActive: false },
      { state: false, id: 17, note: "F3", borderActive: false },
      { state: false, id: 18, note: "E3", borderActive: false },
      { state: false, id: 19, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 20, note: "G3", borderActive: false },
      { state: false, id: 21, note: "F3", borderActive: false },
      { state: false, id: 22, note: "E3", borderActive: false },
      { state: false, id: 23, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 24, note: "G3", borderActive: false },
      { state: false, id: 25, note: "F3", borderActive: false },
      { state: false, id: 26, note: "E3", borderActive: false },
      { state: false, id: 27, note: "C3", borderActive: false },
    ],
    [
      { state: false, id: 28, note: "G3", borderActive: false },
      { state: false, id: 29, note: "F3", borderActive: false },
      { state: false, id: 30, note: "E3", borderActive: false },
      { state: false, id: 31, note: "C3", borderActive: false },
    ],
  ]);

  useEffect(() => {
    const loop = new Tone.Loop((time) => {
      setCount((prevCount) => prevCount + 1);

      setGridState((prevState) => {
        let index = count % prevState.length;
        let nextIndex = (count + 1) % prevState.length;
        let newState = [...prevState];
        let newNextState = newState[nextIndex].map((obj) => {
          let newObj = { ...obj };
          newObj.borderActive = !newObj.borderActive;
          return newObj;
        });

        newState[nextIndex] = newNextState;

        let currentIndexedState = newState[index].map((obj) => {
          let newObj2 = { ...obj };
          newObj2.borderActive = !newObj2.borderActive;
          return newObj2;
        });

        newState[index] = currentIndexedState;

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
              borderActive: prevState[i][q].borderActive,
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

  function switchTempo() {}

  return (
    <div className="App">
      <div className="synthesizer-div">
        <div className="synth-header">
          <h1>Sequencer</h1>
          <div onClick={switchRunning} className="button-div">
            {running ? (
              <img src={pause} alt="pause" className="buttonImg"></img>
            ) : (
              <img src={play} alt="play" className="buttonImg"></img>
            )}
          </div>
          <h2>Tempo</h2>
          <div className="button-div">
            <CircularSlider
              onChange={(value) => (Tone.Transport.bpm.value = value)}
              className="tempo-slider"
              width={35}
              min={60}
              max={120}
              dataIndex={30}
              knobColor={"black"}
              knobSize={20}
              hideLabelValue={true}
              progressColorTo={"orange"}
              progressColorFrom={"orange"}
              trackColor={"lightblue"}
            ></CircularSlider>
          </div>
        </div>
        <Grid gridState={gridState} setBlock={setBlock} playNote={playNote} />
      </div>
    </div>
  );
}

export default App;
