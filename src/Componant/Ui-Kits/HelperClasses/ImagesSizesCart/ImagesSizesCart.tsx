import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { imageData, imagesDetails } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { ImagesSizes } from '../../../../utils/Constant'

const ImagesSizesCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={ImagesSizes} span={imageData} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className="img-30 img-h-30" src={"/src/assets/images/blog/comment.jpg"} alt="img-size-10" />
            {imagesDetails.map((item, index) => (
              <Image width={item} height={item} className={`img-${item} img-h-${item}`} src={"/src/assets/images/blog/comment.jpg"} alt={`img-size-${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ImagesSizesCart