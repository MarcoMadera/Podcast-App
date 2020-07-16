import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../../components/Spinner";
import Grid from "./components/Grid";
import Header from "./components/Header";

const Categories = (props) => {
  const categoryId = props.match.params.id;

  const [channels, setChannels] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.audioboom.com/categories/${categoryId}/channels/featured?image_size_hint[thumb]=250x250`
      ).then((categories) =>
        categories.json().then((res) => {
          setChannels(res);
        })
      ),
      fetch(
        `https://api.audioboom.com/categories/${categoryId}?image_size_hint[thumb]=250x250`
      ).then((categories) =>
        categories.json().then((res) => {
          setCategory(res);
        })
      ),
    ]);
  }, []);
  console.log("category id", category);
  console.log("channels res", channels);

  return (
    <Fragment>
      {!category || !channels ? (
        <Spinner />
      ) : (
        <div>
          <Header
            banner={
              category.body.banner_image && category.body.banner_image.original
            }
          />
          <h1 className="Grid__title">{category.body.title}</h1>
          <Grid channels={channels} data={category} />
        </div>
      )}
    </Fragment>
  );
};
export default Categories;
