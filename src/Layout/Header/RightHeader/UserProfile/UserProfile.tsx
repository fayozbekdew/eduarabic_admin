import { Image, LI, P } from "../../../../AbstractElements";
import ProfileBox from "./ProfileBox";

const UserProfile = () => {
  return (
    <LI className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        <Image className="img-30" src={"/src/assets/images/dashboard/profile.png"} alt="user" />
        <div className="flex-grow-1">
          <span>{"Alen Miller"}</span>
          <P className="mb-0 font-outfit">{"UI Designer"}
            <i className="fa fa-angle-down" />
          </P>
        </div>
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
