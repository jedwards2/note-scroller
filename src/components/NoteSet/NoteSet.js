import "./NoteSet.css";

function NoteSet({ setCurrentRow, row, rowNumber, currentNote }) {
  return (
    <div className="noteset-row">
      <div
        className={`button-div ${row ? "selected" : ""}`}
        onClick={() => {
          setCurrentRow((prevState) => {
            let newState = [false, false, false, false];
            newState[rowNumber] = true;
            return newState;
          });
        }}
      ></div>
      <div className="noteset-name">{currentNote}</div>
    </div>
  );
}

export default NoteSet;
