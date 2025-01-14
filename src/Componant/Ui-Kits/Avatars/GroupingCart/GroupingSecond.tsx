import { Image, LI, UL } from '../../../../AbstractElements'
import { groupingImageTwo } from '../../../../Data/Ui-Kits/Avtar/Avtar'

const GroupingSecond = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className='simple-list flex-row'>
        <LI className="d-inline-block">
          <Image width={56} height={56} className="img-60 rounded-circle" src={"/src/assets/images/avtar/16.jpg"} alt="image" />
        </LI>
        {groupingImageTwo.map(({ className1, className2, src, size }, index) => (
          <LI className="d-inline-block" key={index}>
            <Image width={size} height={size} className={`${className1 && className1} ${className2 && className2} h-auto`} src={`/src/assets/images/${src}`} alt="image" />
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GroupingSecond