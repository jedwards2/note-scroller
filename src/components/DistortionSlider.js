import CircularSlider from "@fseehawer/react-circular-slider";

function DistortionSlider({ setDistAmount }) {
  return (
    <div className="button-div">
      <CircularSlider
        onChange={(value) => setDistAmount(value / 100)}
        className="tempo-slider"
        width={35}
        min={0}
        max={100}
        dataIndex={50}
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

export default DistortionSlider;
