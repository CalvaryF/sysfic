import React, { Component } from "react";
import Cards from "./components/cards";
import Header from "./components/header";
import Footer from "./components/footer";
import Feed from "./feed";
import Info from "./info";
import Blog from "./blog";
import Test from "./test2";
import Work from "./work";
import Project from "./components/project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

class Main extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />

          <template id="zoomTemplate">
            <div class="zoomWrapper">
              <section class="zoomContainer" data-zoom-container></section>
            </div>
          </template>

          <Header />
          <Switch>
            <Route exact path="/">
              {" "}
              <Redirect to="/work" />{" "}
            </Route>

            <Route path="/work" exact component={Work} />
            <Route path="/feed" component={Feed} />
            <Route path="/blog" component={Blog} />
            <Route path="/info" component={Info} />
            <Route path="/test" component={Test} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default Main;
