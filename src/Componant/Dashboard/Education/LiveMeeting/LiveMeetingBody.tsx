import { Image } from "../../../../AbstractElements";
import { liveMeetingData } from "../../../../Data/Dashboard/EducationData";

const LiveMeetingBody = () => {
  return (
    <>
      <div className="live-metting">
        <Image className="img-fluid" src={`/src/assets/images/dashboard-4/metting/teacher.png`} alt="teacher" />
        <div className="star-img">
          <Image className="img-fluid" src={`/src/assets/images/dashboard-4/metting/chart.png`} alt="chart" />
          <Image className="img-fluid" src={`/src/assets/images/dashboard-4/metting/message.png`} alt="message" />
          {liveMeetingData.map((data,i)=>(
            <Image src={`/src/assets/images/dashboard-4/metting/${data}.png`} alt="metting" key={i}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default LiveMeetingBody;
