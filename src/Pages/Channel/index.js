import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../../components/Spinner";

import Header from "./components/Header";
import Series from "./components/Series";
import PodcastList from "./components/PodcastList";
import "./css/Channel.css";

const Channel = (props) => {
  const idChannel = props.match.params.id;

  const [channel, setChannel] = useState();
  const [audioClips, setAudioClips] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.audioboom.com/channels/${idChannel}?image_size_hint[thumb]=250x250`
      )
        .then((res) => res.json())
        .then((res) => {
          setChannel(res.body.channel);
        }),

      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        .then((res) => res.json())
        .then((res) => {
          setAudioClips(res.body.audio_clips);
        }),

      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        .then((res) => res.json())
        .then((res) => {
          setSeries(res.body.channels);
        }),
    ]);
  }, []);

  return (
    <Fragment>
      {!channel ? (
        <Spinner />
      ) : (
        <div className="Channel__container">
          <Header
            logo={channel.urls.logo_image.thumb.url}
            banner={channel.urls.banner_image.original}
          />
          <h1 className="Channel__container__title">{channel.title}</h1>
          {series.length > 0 && <Series series={series} />}
          <h2 className="Channel__container__title">Latest Podcast</h2>
          <PodcastList audioClips={audioClips} />
        </div>
      )}
    </Fragment>
  );
};
export default Channel;
