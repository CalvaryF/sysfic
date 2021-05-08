import React from "react";
import ProjectHead from "./components/projectHead";
import AllText from "./components/cardTypes/allText";
import TextImageText from "./components/cardTypes/textImageText";
import AllImage from "./components/cardTypes/allImage2";
import Sticky from "./components/cardTypes/long";
import MultiImage from "./components/cardTypes/multiImage";
import NextProject from "./components/cardTypes/nextProject";

function Info() {
  return (
    <div>
      <ProjectHead
        ProjectTitle="Cimera"
        ProjectCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
      />
      <div className="projectContainer flex">
        <div className="projectLeft">
          <Sticky icon={"/images/icon.svg"} color={1} title={"Project Seed"} />
        </div>
        <div className="projectRight">
          <AllImage
            title={"ocular vision"}
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <AllImage
            title={"Bone Minimalism"}
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <AllImage
            title={"ocular vision"}
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <AllImage
            title={"Bone Minimalism"}
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
        </div>
      </div>
      <NextProject title={"startopolis"} image={"/images/NextProject.png"} />
    </div>
  );
}

export default Info;
