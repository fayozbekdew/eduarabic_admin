import { Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";

const RunningEventsImage = () => {
  return (
    <Col xs="6" className="running-events">
      <Image src={"/src/assets/images/dashboard-2/round.png"} alt="dashboard" />
      <div>
        <Image className="running-events-image" src={"/src/assets/images/dashboard-2/events-bg.png"} alt="dashboard"/>
      </div>
    </Col>
  );
};

export default RunningEventsImage;
