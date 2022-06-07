import CircularSlider from "@fseehawer/react-circular-slider";
import "./NoteSet.css";

function NoteSet({ updateNote, row, defaultSpot }) {
  let notes = [
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "A2",
    "B2",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "A3",
    "B3",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B5",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "A5",
    "B5",
  ];
  return (
    <div className="noteset-row">
      <h2>Change Note</h2>
      <div className="button-div">
        <CircularSlider
          onChange={(value) => updateNote(row, value)}
          className="slider"
          width={35}
          min={60}
          max={120}
          data={notes}
          dataIndex={defaultSpot}
          knobColor={"black"}
          knobSize={20}
          hideLabelValue={true}
          progressColorTo={"orange"}
          progressColorFrom={"orange"}
          trackColor={"lightblue"}
        ></CircularSlider>
      </div>
    </div>
  );
}

export default NoteSet;
