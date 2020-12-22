import React from "react";
// import { navigations } from "./../../../routes-main";
import { NavLink } from "react-router-dom";

const handleNavigations = (array) => {
  var result = null;
  if (array.length > 0) {
    result = array.map(({ name, ...rest }, index) => {
      return (
        <NavLink key={index} {...rest} className="my-nav-link">
          {name}
        </NavLink>
      );
    });
  }
  return result;
};
function NavBar(props) {
  const { navigations } = props;
  return <div>{handleNavigations(navigations)}</div>;
}
export default NavBar;
