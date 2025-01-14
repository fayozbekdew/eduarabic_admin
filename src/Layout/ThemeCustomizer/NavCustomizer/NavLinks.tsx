import { Image } from "../../../AbstractElements";
import { navLinkList } from "../../../Data/LayoutData/ThemeCustomizerData";
import { NavLink } from "reactstrap";

const NavLinks = () => {
  return (
    <>
      {navLinkList &&
        navLinkList.map((item, index) => (
          <NavLink key={index} href={item.path} target="_blank">
            <div>
              <Image
                src={
                  `/src/assets/images/customizer/${item.image}`
                }
                alt="icons"
              />
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  );
};

export default NavLinks;
