import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import CustomButton from "../../ui/CustomButton/CustomButton";

//TODO: refactor inputs to custom input components
interface HeroProps {
  heading: string;
  subHeading: {
    subHeading: string;
  };
  backgroundImage: IGatsbyImageData;
  callToActionText: string;
}
const HeroSection:React.FC<HeroProps> = ({heading,subHeading,backgroundImage,callToActionText}) => {
  return (
    <section className="pt-[60px] sm:pt-32">
      <main className="flex flex-col items-center justify-center gap-5 px-2 sm:gap-7">
        <div className="text-3xl sm:text-5xl  leading-10 text-purple-1100 font-semibold tracking-tight sm:leading-[68px] lg:max-w-[740px] sm:tracking-[-3px] text-center">
          <h1 className="text-primary">{heading}</h1>
        </div>

        <p className="text-base sm:text-lg leading-6 sm:leading-7 text-secondary opacity-80 font-normal  font-inter max-w-[792px] text-center">
          {subHeading?.subHeading}
        </p>
        <section className="flex pl-3 mb-3 w-full sm:max-w-[700px]">
          <form
            action="#"
            className="relative flex flex-col items-center w-full mr-2 justify-evenly sm:flex-row "
            onSubmit={() => alert("Demo booked successfully")}
          >
            <input
              type="text"
              placeholder="Your email address"
              className="h-[3rem] w-full  border-2 mb-4 rounded-md border-primary  sm:mb-0 sm:w-[70%]"
            />
            <CustomButton
              classes={
                "px-6 py-3 font-semibold w-full text-white rounded-lg shadow-lg bg-primary focus:outline-none focus:ring-2 sm:w-[25%]"
              }
              btnText={callToActionText}
            />
          </form>
        </section>
      </main>
      {backgroundImage && (
        <GatsbyImage image={backgroundImage} alt="Hero section image" />
      )}
    </section>
  );
};

export default HeroSection;
