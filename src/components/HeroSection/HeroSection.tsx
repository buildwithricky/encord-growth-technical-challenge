import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

interface HeroProps {
  heading: string;
  subHeading: {
    subHeading: string;
  };
  backgroundImage: IGatsbyImageData;
  buttonText: string;
}
const HeroSection:React.FC<HeroProps> = ({heading,subHeading,backgroundImage,buttonText}) => {
  return (
    <section className="pt-[60px] sm:pt-32">
      <main className="flex flex-col items-center justify-center gap-5 sm:gap-7">
        <div className="text-3xl sm:text-5xl font-manrope leading-10 text-purple-1100 font-semibold tracking-tight sm:leading-[68px] lg:max-w-[740px] sm:tracking-[-3px] text-center">
          <h1 className="text-primary">
           {heading}
          </h1>
        </div>

        <p className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-700 opacity-80 font-normal tracking-tight font-inter max-w-[792px] text-center">
          {subHeading?.subHeading}
        </p>
        <section className="flex pl-3 mb-3 w-full sm:max-w-[474px]">
          <form
            action="#"
            className="relative flex flex-col items-center w-full justify-evenly sm:flex-row"
            onSubmit={() => alert("form submitted")}
          >
            <input
              type="text"
              placeholder="Your email address"
              className="h-[3rem] border-2 mb-4 rounded-md border-primary  sm:mb-0"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white rounded-lg shadow-lg bg-primary focus:outline-none focus:ring-2"
            >
              {buttonText}
            </button>
          </form>
        </section>
      </main>
      {backgroundImage && <GatsbyImage image={backgroundImage} alt="Hero section image" />}
    </section>
  );
};

export default HeroSection;
