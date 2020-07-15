import React, { useEffect, useState, Fragment } from "react";
import Spinner from "../../components/Spinner";

const Podcast = (props) => {
  const id = props.match.params.id;
  const [clip, setClipt] = useState();

  useEffect(() => {
    fetch(`https://api.audioboom.com/audio_clips/${id}.mp3/`)
      .then((res) => res.json())
      .then((res) => {
        setClipt(res.body.audio_clip);
      });
  }, []);

  return (
    <Fragment>
      {!clip ? (
        <Spinner />
      ) : (
        <div>
          <h1>Podcast {id}</h1>
          <div className="player">
            <h3>{clip.title}</h3>
            <h6>{clip.channel.title}</h6>
            <audio controls autoPlay={true}>
              <source src={clip.urls.high_mp3} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Podcast;
