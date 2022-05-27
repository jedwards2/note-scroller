import "./MusicBlock.css";
import { useEffect } from "react";

function MusicBlock({ blockState, setBlock, active, playNote }) {
  useEffect(() => {
    console.log(blockState.note);
    if (blockState.state && active) {
      console.log(blockState.note);
      playNote(blockState.note);
    }
  }, [active, blockState]);

  return (
    <div
      className={`music-block ${blockState.state ? "on" : "off"}`}
      onClick={() => setBlock(blockState.id)}
    ></div>
  );
}

export default MusicBlock;
