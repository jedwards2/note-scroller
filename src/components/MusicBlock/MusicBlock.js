import "./MusicBlock.css";
import { useEffect } from "react";

function MusicBlock({ blockState, setBlock, playNote }) {
  useEffect(() => {
    if (blockState.state && blockState.borderActive) {
      playNote(blockState.note);
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
