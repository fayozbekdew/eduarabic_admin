import { Image, LI, UL } from '../../../../AbstractElements'
import { groupingImageThird } from '../../../../Data/Ui-Kits/Avtar/Avtar'

const GroupInThird = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className='simple-list flex-row'>
        <LI className="d-inline-block">
          <Image width={36} height={36} className="img-40 rounded-circle" src={"/src/assets/images/user/3.jpg"} alt="image" />
        </LI>
        {groupingImageThird.map((item, index) => (
          <LI className="d-inline-block" key={index}>
            <Image width={36} height={36} className="img-40 rounded-circle" src={`/src/assets/images/${item}`} alt="image" />
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GroupInThird