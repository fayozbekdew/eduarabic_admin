import { Link } from 'react-router-dom'
import { Image } from '../../../../AbstractElements'
import { CommonFormPropsType } from '../../../../Types/OtherPages/OtherPages'

const CommonLogo = ({ alignLogo }: CommonFormPropsType) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo :""}`} to={`/dashboard/default`}>
      <Image
        className="img-fluid for-light"
        src={"/src/assets/images/logo/logo.png"}
        alt="loginpage"
      />
      <Image
        className="img-fluid for-dark"
        src={"/src/assets/images/logo/logo_dark.png"}
        alt="loginpage"
      />
    </Link>
  )
}

export default CommonLogo