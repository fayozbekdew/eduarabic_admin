import { currentCartData } from '../../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import { H6, Image, P } from '../../../../../../AbstractElements'

const CurrentCartTableBody = () => {
  return (
    <tbody>
      {currentCartData.map((data, index) => (
        <tr key={index}>
          <td>
            <Image src={`/src/assets/images/${data.imagePath}`} alt="t-shirt"/>
          </td>
          <td>
            <div >
              <H6>{data.productName}</H6>
              <span>{data.productSum}</span>
            </div>
          </td>
          <td>
            <P>{data.price}</P>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default CurrentCartTableBody