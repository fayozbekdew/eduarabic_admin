import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { SVG } from "../../../../../AbstractElements";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
      <DropdownToggle color="transparent" className="dropdown-form p-0 border-0">
        <i className="icon-plus text-dark-emphasis" />
      </DropdownToggle>
      <DropdownMenu className="chat-icon">
        <DropdownItem tag='div' className="mb-2">
          <SVG iconId="camera" />
        </DropdownItem>
        <DropdownItem tag='div'>
          <SVG iconId="attchment" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatDropMenu;
