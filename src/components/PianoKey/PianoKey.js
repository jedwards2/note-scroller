import "./PianoKey.css";

function PianoKey({ note, updateNote }) {
  let offsetNote =
    (note.name.includes("D") && !note.name.includes("/")) ||
    (note.name.includes("E") && !note.name.includes("/")) ||
    (note.name.includes("G") && !note.name.includes("/")) ||
    (note.name.includes("A") && !note.name.includes("/")) ||
    (note.name.includes("B") && !note.name.includes("/"))
      ? true
      : false;

  return (
    <div>
      <div
        className={`${note.name.includes("/") ? "black" : "white"} ${
          offsetNote ? "offset" : ""
        }`}
        onClick={() => {
          updateNote(note.name);
        }}
      ></div>
    </div>
  );
}

export default PianoKey;
