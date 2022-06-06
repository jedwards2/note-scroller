import MusicBlock from "../MusicBlock/MusicBlock";
import "./Column.css";

function Column({ columnState, setBlock, playNote }) {
  return (
    <div className="column">
      <MusicBlock
        blockState={columnState[0]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[1]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[2]}
        setBlock={setBlock}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[3]}
        setBlock={setBlock}
        playNote={playNote}
      />
    </div>
  );
}

export default Column;
