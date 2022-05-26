import "./MusicBlock.css";

function MusicBlock({ blockState, setBlock }) {
  return (
    <div
      className={`music-block ${blockState.state ? "on" : "off"}`}
      onClick={() => setBlock(blockState.id)}
    ></div>
  );
}

export default MusicBlock;
