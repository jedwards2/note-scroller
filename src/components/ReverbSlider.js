import CircularSlider from "@fseehawer/react-circular-slider";

function ReverbSlider({ setReverbAmount }) {
  return (
    <div className="button-div">
      <CircularSlider
        onChange={(value) => setReverbAmount(value)}
        className="tempo-slider"
        width={35}
        min={1}
        max={20}
        dataIndex={5}
        knobColor={"black"}
        knobSize={20}
        hideLabelValue={true}
        progressColorTo={"orange"}
        progressColorFrom={"orange"}
        trackColor={"lightblue"}
      ></CircularSlider>
    </div>
  );
}

export default ReverbSlider;
