import React, { useEffect, Fragment } from "react";
import Spinner from "../../components/Spinner";
import "./css/Podcast.css";

const Podcast = (props) => {
  const id = props.match.params.id;
  const { clip, setClip } = props;
  useEffect(() => {
    if (clip !== undefined) {
      setClip(undefined);
    }
    fetch(
      `https://api.audioboom.com/audio_clips/${id}.mp3?image_size_hint[thumb]=250x250`
    )
      .then((res) => res.json())
      .then((res) => {
        setClip(res.body.audio_clip);
      });
  }, []);
  console.log("clip", clip);

  return (
    <Fragment>
      {clip === undefined ? (
        <Spinner />
      ) : (
        <div className="Podcast__container">
          <h1>Podcast {id}</h1>
          <div className="Podcast__titles">
            <h3>{clip.title}</h3>
            <h5>{clip.channel && clip.channel.title}</h5>
            <div className="Podcast__imgs">
              <img
                className="Podcast__img"
                src={
                  (clip.urls.images !== undefined &&
                    clip.urls.images.thumb.url) ||
                  clip.urls.wave_img
                }
                alt=""
              />
              <img
                src={clip.user.urls.images.thumb.url}
                alt=""
                className="Podcast__userImg"
              />
            </div>
            <p className="Podcast__description">{clip.description}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Podcast;
