import React, { Fragment } from "react";
import Navbar from "./Navbar.js";

const Layout = (props) => {
  return (
    <Fragment>
      {props.children}
      <Navbar clip={props.clip} />
    </Fragment>
  );
};

export default Layout;
