import React, { Component } from "react";
import Cards from "./components/cards";
import Header from "./components/header";
import Footer from "./components/footer";
import Feed from "./feed";
import Info from "./info";
import Test from "./test";
import Project from "./components/project";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

class Main extends Component {
  state = {
    projects: [
      {
        id: 1,
        type: 0,
        title: "CONTROL",
        path: "/test",
        thumbnail: "/images/1.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project1/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project1/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project1/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project1/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project1/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project1/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project1/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project1/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project1/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 2,
        type: 1,
        title: "N-ZYME",
        path: "/test",
        thumbnail: "/images/2.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project2/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project2/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project2/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project2/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project2/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project2/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project2/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project2/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project2/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 3,
        type: 2,
        title: "STARTOPOLIS",
        path: "/test",
        thumbnail: "/images/3.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project3/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project3/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project3/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project3/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project3/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project3/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project3/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project3/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project3/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 1,
        type: 0,
        title: "PARACASTE",
        path: "/test",
        thumbnail: "/images/4.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project1/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project1/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project1/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project1/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project1/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project1/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project1/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project1/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project1/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 2,
        type: 1,
        title: "GENERIC PROCESSOR",
        path: "/test",
        thumbnail: "/images/5.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project2/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project2/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project2/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project2/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project2/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project2/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project2/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project2/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project2/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 2,
        type: 1,
        title: "RETURN 40,000",
        path: "/test",
        thumbnail: "/images/6.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project2/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project2/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project2/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project2/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project2/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project2/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project2/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project2/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project2/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 2,
        type: 1,
        title: "NOISEBLOOM",
        path: "/test",
        thumbnail: "/images/7.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project2/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project2/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project2/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project2/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project2/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project2/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project2/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project2/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project2/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
      {
        id: 2,
        type: 1,
        title: "CURSOR",
        path: "/test",
        thumbnail: "/images/8.jpg",
        description: "Sometimes Fake is Better",
        image0: "/images/project2/test0.png",
        description0:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image1: "/images/project2/test1.png",
        description1:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image2: "/images/project2/test2.png",
        description2:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image3: "/images/project2/test3.png",
        description3:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image4: "/images/project2/test4.png",
        description4:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image5: "/images/project2/test5.png",
        description5:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image6: "/images/project2/test6.png",
        description6:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image7: "/images/project2/test7.png",
        description7:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
        image8: "/images/project2/test8.png",
        description8:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci?",
      },
    ],
  };
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
            <Route
              path="/work"
              exact
              render={(props) => <Cards cards={this.state.projects} />}
            />
            <Route path="/feed" component={Feed} />
            <Route path="/info" component={Info} />
            <Route path="/test" component={Test} />
            {this.state.projects.map((project) => (
              <Project
                key={project.id}
                type={project.type}
                title={project.title}
                thumbnail={project.thumbnail}
                path={project.path}
                description={project.description}
                image0={project.image0}
                image1={project.image1}
                image2={project.image2}
                image3={project.image3}
                image4={project.image4}
                image5={project.image5}
                image6={project.image6}
                image7={project.image7}
                image8={project.image8}
                description0={project.description0}
                description1={project.description1}
                description2={project.description2}
                description3={project.description3}
                description4={project.description4}
                description5={project.description5}
                description6={project.description6}
                description7={project.description7}
                description8={project.description8}
              />
            ))}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default Main;
