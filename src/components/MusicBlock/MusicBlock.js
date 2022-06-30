import "./MusicBlock.css";
import { useEffect, useState } from "react";
import * as Tone from "tone";

function MusicBlock({ blockState, setBlock, playNote }) {
  const [synth, setSynth] = useState();

  useEffect(() => {
    setSynth(new Tone.PolySynth(Tone.Synth).toDestination());
  }, []);

  useEffect(() => {
    if (blockState.state && blockState.borderActive && synth) {
      playNote(blockState.note, synth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockState]);

  return (
    <div
      className={`music-block ${blockState.state ? "on" : "off"} ${
        blockState.borderActive ? "border-on" : "border-off"
      }`}
      onClick={() => setBlock(blockState.id)}
    ></div>
  );
}

export default MusicBlock;
