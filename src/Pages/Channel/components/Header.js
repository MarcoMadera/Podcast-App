import React, { Fragment } from "react";
import "./css/Header.css";

const Header = (props) => {
  const { banner, logo } = props;
  return (
    <Fragment>
      <div
        className="Channel__Header__banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />
      <img className="Channel__Header__logo" src={logo} alt="" />
    </Fragment>
  );
};

export default Header;
