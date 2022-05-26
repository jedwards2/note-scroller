import "./App.css";
// import * as Tone from "tone";
import Grid from "./components/Grid/Grid";

function App() {
  // const synth = new Tone.Synth().toDestination();
  // const synth2 = new Tone.Synth().toDestination();
  // let playNote = (note) => synth.triggerAttack(note);
  // // let playNote2 = (note) => synth2.triggerAttackRelease(note, "2n");
  // let stopNote = () => synth.triggerRelease();

  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
