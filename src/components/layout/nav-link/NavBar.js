import React from "react";
import navigations from "./../../../navigations";
import { NavLink } from "react-router-dom";

const handleNavigations = (array) => {
  var result = null;
  if (array.length > 0) {
    result = array.map(({ name, ...rest }, index) => {
      return (
        <NavLink key={index} {...rest}>
          {name}
        </NavLink>
      );
    });
  }
  return result;
};
function NavBar() {
  return <div>{handleNavigations(navigations)}</div>;
}

export default NavBar;
