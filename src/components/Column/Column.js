import MusicBlock from "../MusicBlock/MusicBlock";
import "./Column.css";

function Column({ columnState, setBlock, background, playNote }) {
  return (
    <div className={`column ${background ? "column-on" : "column-off"}`}>
      <MusicBlock
        blockState={columnState[0]}
        setBlock={setBlock}
        active={background}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[1]}
        setBlock={setBlock}
        active={background}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[2]}
        setBlock={setBlock}
        active={background}
        playNote={playNote}
      />
      <MusicBlock
        blockState={columnState[3]}
        setBlock={setBlock}
        active={background}
        playNote={playNote}
      />
    </div>
  );
}

export default Column;
