import React from "react";

const Series = (props) => {
  const { series } = props;
  return (
    <div>
      <h2>Series</h2>
      <div className="channels">
        {series.map((serie) => (
          <Link to={`/channel/${serie.id}`}>
            <a className="channel">
              <img src={serie.urls.logo_image.original} alt="" />
              <h2>{serie.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Series;
