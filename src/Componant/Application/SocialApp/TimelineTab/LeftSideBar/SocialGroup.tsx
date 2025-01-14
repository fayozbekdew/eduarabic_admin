import { useState } from 'react'
import { Image, LI, ToolTip, UL } from '../../../../../AbstractElements'
import { socialGroupData } from '../../../../../Data/Application/SocialApp/SocialApp'

const SocialGroup = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  
  return (
    <UL className="simple-list flex-row">
      {socialGroupData.map((data, index) => (
        <LI className="d-inline-block" key={index}>
          <Image className="img-40 rounded-circle" src={`/src/assets/images/user/${data.imageName}`} alt="Img" id={`TooltipExample-${index}`} />
          <ToolTip placement="top" toggle={toggle} isOpen={tooltipOpen} target={`TooltipExample-${index}`}>
            {data.userName}
          </ToolTip>
        </LI>
      ))}
    </UL>
  )
}

export default SocialGroup