import React, { useEffect, useState, Fragment } from "react";
import Section from "./components/Section";
import Spinner from "../../components/Spinner";
import "./css/Home.css";

const Home = () => {
  const [recommended, setRecommended] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.audioboom.com/channels/recommended?image_size_hint[thumb]=250x250&page[items]=15"
      ).then((channels) =>
        channels.json().then((res) => {
          setRecommended(res);
        })
      ),
      fetch(
        "https://api.audioboom.com/categories?image_size_hint[thumb]=250x250&page[items]=15"
      ).then((categories) =>
        categories.json().then((res) => {
          setCategories(res);
        })
      ),
      fetch(
        "https://api.audioboom.com/audio_clips/popular?image_size_hint[thumb]=250x250&page[items]=15"
      ).then((categories) =>
        categories.json().then((res) => {
          setPopular(res);
        })
      ),
    ]);
  }, []);

  console.log("recommended", recommended);
  console.log("categories", categories);

  return (
    <div className="Home__content">
      {recommended.length == 0 ||
      categories.length == 0 ||
      popular.length == 0 ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="Home__content__header">
            <h1>Welcome</h1>
          </div>
          <Section name="channel" data={recommended} />
          <Section name="categories" data={categories} />
          <Section name="popular" data={popular} />
        </Fragment>
      )}
    </div>
  );
};

export default Home;
