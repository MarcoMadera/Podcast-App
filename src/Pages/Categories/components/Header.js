import React, { Fragment } from "react";
import "./css/Header.css";

const Header = (props) => {
  const { banner } = props;
  return (
    <Fragment>
      <div
        className="Channel__Header__banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />
    </Fragment>
  );
};

export default Header;
