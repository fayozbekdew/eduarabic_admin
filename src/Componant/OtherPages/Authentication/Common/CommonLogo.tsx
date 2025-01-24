import { Link } from 'react-router-dom'
import { Image } from '../../../../AbstractElements'
import { CommonFormPropsType } from '../../../../Types/OtherPages/OtherPages'

const CommonLogo = ({ alignLogo }: CommonFormPropsType) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo :""}`} to={`/dashboard/default`}>
      <Image
        className="img-fluid for-light"
        src={"/src/assets/images/logo/logo.svg"}
        alt="loginpage"
      />
      <Image
        className="img-fluid for-dark"
        src={"/src/assets/images/logo/logo.svg"}
        alt="loginpage"
      />
    </Link>
  )
}

export default CommonLogo