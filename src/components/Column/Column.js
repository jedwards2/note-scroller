import MusicBlock from "../MusicBlock/MusicBlock";
import "./Column.css";

function Column({ columnState, setBlock }) {
  return (
    <div className="column">
      <MusicBlock blockState={columnState[0]} setBlock={setBlock} />
      <MusicBlock blockState={columnState[1]} setBlock={setBlock} />
      <MusicBlock blockState={columnState[2]} setBlock={setBlock} />
      <MusicBlock blockState={columnState[3]} setBlock={setBlock} />
    </div>
  );
}

export default Column;
