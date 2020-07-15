import React from "react";
import { Link } from "react-router-dom";
import "./css/Grid.css";

const Grid = (props) => {
  console.log(props.data.body);
  return (
    <div className="Grid">
      {props.data.body.map((channel) => (
        <Link
          to={`/channel/${channel.id}`}
          className="grid__podcastChannel"
          key={channel.id}
        >
          <img src={channel.urls.logo_image.original} alt="Channel Image" />
          <h2>{channel.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
