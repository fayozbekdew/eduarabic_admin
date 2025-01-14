import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { CardBody, Row } from 'reactstrap'
import { hoverImageDataList } from '../../../../Data/Gallery/Gallery'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'

const ImageHoverEffectsCardBody = (props: {data:number}) => {
  return (
    <CardBody>
      <Row className="my-gallery gallery mb-auto">
        <Gallery>
          {hoverImageDataList &&
            hoverImageDataList.map((item, index) => (
              <figure className={`m-0 col-md-3 col-6 img-hover hover-${props.data}`} key={index}>
                <Item original={`/src/assets/images/${item}`} width="1024" height="768">
                  {({ ref, open }) => (
                    <Link to={Href} onClick={open}>
                      <div className="overflow-hidden">
                        <img ref={ref as React.MutableRefObject<HTMLImageElement>} src={`/src/assets/images/${item}`} alt="images" />
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  )
}

export default ImageHoverEffectsCardBody