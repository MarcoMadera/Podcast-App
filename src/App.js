import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Channel from "./Pages/Channel";
import Search from "./Pages/Search";
import Podcast from "./Pages/Podcast";
import Categories from "./Pages/Categories";
import NotFound from "./components/NotFound";

const App = () => {
  const [clip, setClip] = useState();
  return (
    <BrowserRouter>
      <Layout clip={clip}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/channel/:id" component={Channel} />
          <Route exact path="/categories/:id" component={Categories} />
          <Route exact path="/search" component={Search} />
          <Route
            exact
            path="/podcast/:id"
            render={(props) => (
              <Podcast clip={clip} setClip={setClip} {...props} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
