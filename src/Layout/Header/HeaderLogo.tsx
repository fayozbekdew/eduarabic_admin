import { Link } from "react-router-dom";
import Image from "../../CommonElements/Media";

const HeaderLogo = () => {
  return (
    <div className="header-logo-wrapper col-auto">
        <div className="logo-wrapper">
            <Link to={"/"}>
                <Image className="img-fluid for-light" src={"/src/assets/images/logo/logo.png"} alt="logo"/>
                <Image className="img-fluid for-dark" src={"/src/assets/images/logo/logo_light.png"} alt="logo"/>
            </Link>
        </div>
    </div>
  );
};

export default HeaderLogo;
