import React from "react";
import ProjectHead from "./components/projectHead";
import AllText from "./components/cardTypes/allText";
import TextImageText from "./components/cardTypes/textImageText";
import AllImage from "./components/cardTypes/allImage";
import Sticky from "./components/cardTypes/sticky";
import MultiImage from "./components/cardTypes/multiImage";
import NextProject from "./components/cardTypes/nextProject";

function Info() {
  return (
    <div>
      <ProjectHead />
      <div className="projectContainer flex">
        <div className="projectLeft">
          <Sticky
            icon={"/images/icon.svg"}
            color={0}
            title={"Project Principle"}
            item1={"Non / Human boundary"}
            item2={"Proto-social networks"}
            item3={"Bio-Logistics"}
          />
          <Sticky
            icon={"/images/icon2.svg"}
            color={1}
            title={"Tools + Techniques"}
            item1={"Research"}
            item2={"Prototyping"}
            item3={"Storyboarding"}
          />
        </div>

        <div className="projectRight">
          <TextImageText
            title={"infrahumanism"}
            caption={
              "This is a motherfucking caption, mess around and see. yeah, thats what I thought"
            }
            subtitle1={"Tracable Transplants"}
            subtitle2={"Remember Where You Are"}
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <AllText
            title={"soul control"}
            subtitle1={"Extrastatecraft"}
            subtitle2={"The Ikea Effect"}
          />
          <MultiImage
            title={"breakdown"}
            captionHead2={"wow... another one"}
            captionHead1={"Dont blink, its a caption"}
            caption1={
              "This is a motherfucking caption, mess around and see. Yeah, thats what I thought"
            }
            image1={"/images/image1.png"}
            image2={"/images/image2.png"}
            image3={"/images/image3.png"}
            image4={"/images/image4.png"}
          />
          <AllImage
            title={"ocular vision"}
            caption={
              "This is a motherfucking caption, mess around and see. yeah, thats what I thought"
            }
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <AllImage
            title={"Bone Minimalism"}
            caption={
              "This is a motherfucking caption, mess around and see. yeah, thats what I thought"
            }
            image={"/images/image.png"}
            imageMobile={"/images/image_mobile.png"}
          />
          <TextImageText
            title={"infrahumanism"}
            caption={
              "This is a motherfucking caption, mess around and see. yeah, thats what I thought"
            }
            subtitle1={"Tracable Transplants"}
            subtitle2={"Remember Where You Are"}
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
