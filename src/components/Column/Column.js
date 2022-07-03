import MusicBlock from "../MusicBlock/MusicBlock";
import "./Column.css";

function Column({ columnState, setBlock, playNote, synth }) {
  const blocks = columnState.map((obj, idx) => {
    return (
      <MusicBlock
        blockState={obj}
        setBlock={setBlock}
        playNote={playNote}
        key={`obj + ${idx}`}
        synth={synth}
      ></MusicBlock>
    );
  });
  return <div className="column">{blocks}</div>;
}

export default Column;
