import "./MusicBlock.css";
import { useEffect } from "react";

function MusicBlock({ blockState, setBlock, active, playNote }) {
  useEffect(() => {
    if (blockState.state && active) {
      playNote(blockState.note);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, blockState]);

  return (
    <div
      className={`music-block ${blockState.state ? "on" : "off"} ${
        active ? "border-on" : "border-off"
      }`}
      onClick={() => setBlock(blockState.id)}
    ></div>
  );
}

export default MusicBlock;
