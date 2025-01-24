import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { Image, SVG } from "../../AbstractElements";
import {
  handleResponsiveToggle,
  setToggleSidebar,
} from "../../ReduxToolkit/Reducers/LayoutSlice";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);

  return (
    <>
      <div className="logo-wrapper">
        <Link to={`/dashboard/default`}>
          <Image
            className="img-fluid"
            src={"/src/assets/images/logo/logo.svg"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div
          className="back-btn"
          onClick={() => dispatch(handleResponsiveToggle())}
        >
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="toggle-sidebar">
          <SVG
            className={`${sidebarIconType}-icon sidebar-toggle status_toggle middle`}
            iconId={`${sidebarIconType === "fill" ? "fill-" : ""}toggle-icon`}
            onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}
          />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link to={`/dashboard/default`}>
          <Image
            className="img-fluid"
            src={"/src/assets/images/logo/logo.svg"}
            alt="logo"
            width={30}
            height={50}          />
        </Link>
      </div>
    </>
  );
};

export default LogoWrapper;
