import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/PodcastList.css";

const PodcastList = (props) => {
  const { audioClips } = props;
  return (
    <Fragment>
      {audioClips.map((clip, i) => (
        <Link
          to={`/podcast/${clip.id}`}
          key={clip.id + i}
          className="podcastList"
        >
          <h3>{clip.title}</h3>
          <div className="podcastList__meta">
            <p>{Math.ceil(clip.duration / 60)} minutes</p>
          </div>
        </Link>
      ))}
    </Fragment>
  );
};

export default PodcastList;
