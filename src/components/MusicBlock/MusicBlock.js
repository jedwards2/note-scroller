import "./MusicBlock.css";
import { useEffect } from "react";

function MusicBlock({ blockState, setBlock, playNote, synth }) {
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
