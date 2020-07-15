import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PodcastList = (props) => {
  const { audioClips } = props;
  return (
    <Fragment>
      {audioClips.map((clip) => (
        <Link to={`/podcast/${clip.id}`} key={clip.id} className="podcast">
          <h3>{clip.title}</h3>
          <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
        </Link>
      ))}
    </Fragment>
  );
};

export default PodcastList;
