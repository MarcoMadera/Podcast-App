import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Spinner from "../../components/Spinner";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.audioboom.com/channels/recommended").then((channels) =>
      channels.json().then((res) => {
        setData(res);
      })
    );
  }, []);

  return <div>{data.length == 0 ? <Spinner /> : <Grid data={data} />}</div>;
};

export default Home;
