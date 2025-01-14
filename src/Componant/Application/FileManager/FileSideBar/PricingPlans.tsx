import { FiGrid } from "react-icons/fi";
import { Btn, H5, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { FREE, PricingPlan, Selected, TrialVersion } from '../../../../utils/Constant'

const PricingPlans = () => {
  return (
    <UL className='simple-list'>
      <LI>
        <Btn outline color="primary">
          <FiGrid />
          {PricingPlan}
        </Btn>
      </LI>
      <LI></LI>
      <div className="pricing-plan">
        <H6>{TrialVersion} </H6>
        <H5>{FREE}</H5>
        <P>{'100GB Space'}</P>
        <Btn size="xs" color="primary" outline>{Selected}</Btn>
        <Image className="bg-img" src={'/src/assets/images/dashboard/folder.png'} alt="dashboard"/>
      </div>
    </UL>
  )
}

export default PricingPlans