import React, { useState } from "react";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="name-button" onClick={() => setOpen(!open)}>
        {props.location}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItem;
