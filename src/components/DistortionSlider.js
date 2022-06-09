import * as Tone from "tone";
import CircularSlider from "@fseehawer/react-circular-slider";

function DistortionSlider() {
  return (
    <div className="button-div">
      <CircularSlider
        onChange={(value) => console.log(value)}
        className="tempo-slider"
        width={35}
        min={60}
        max={200}
        dataIndex={30}
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
