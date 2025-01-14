import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { Image } from '../../../../AbstractElements'
import { statusData, statusIndicators } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { StatusIndicator } from '../../../../utils/Constant'

const StatusIndicatorCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={StatusIndicator} span={statusData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image width={100} height={100} className="img-100 rounded-circle" src={"/src/assets/images/user/1.jpg"} alt="image" />
              <div className="status bg-success"></div>
            </div>
            {statusIndicators.map(({ className, src ,size,color}, index) => (
              <div className="avatar" key={index}>
                <Image width={size} height={size} className={`${className} rounded-circle`} src={`/src/assets/images/avtar/${src}`} alt="image" />
                <div className={`status bg-${color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StatusIndicatorCart