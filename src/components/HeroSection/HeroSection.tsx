import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import heroImage from "../../images/hero.png"
const HeroSection = () => {
  const image = getImage(
    "https://plus.unsplash.com/premium_photo-1734549547834-5bdb0e12366f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  return (
    <section className="pt-[88px] sm:pt-32">
      <main className="flex flex-col items-center justify-center gap-5 sm:gap-7">
        <div className="text-3xl sm:text-5xl font-manrope leading-10 text-purple-1100 font-semibold tracking-tight sm:leading-[68px] lg:max-w-[740px] sm:tracking-[-3px] text-center">
          <h1 className="text-primary">
            The fastest way to manage, curate and annotate AI data
          </h1>
        </div>

        <p className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-700 opacity-80 font-normal tracking-tight font-inter max-w-[792px] text-center">
          Manage, curate, and label multimodal data such as image, video, audio,
          document, text and DICOM files all on one platform. Transform
          petabytes of unstructured data into high quality data for training,
          fine-tuning, and aligning AI models, fast.
        </p>
        <section className="flex pl-3  w-full border sm:max-w-[474px]">
          <form
            action="#"
            className="relative flex flex-col items-center w-full justify-evenly sm:flex-row"
            onSubmit={() => alert("form submitted")}
          >
            <input
              type="text"
              placeholder="Your email address"
              className="h-[3rem] border-2 mb-4 rounded-md border-primary  sm:mb-0 placeholder:p-4"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white rounded-lg shadow-lg bg-primary focus:outline-none focus:ring-2"
            >
              Get started
            </button>
          </form>
          <GatsbyImage image={image} alt="Your image description" />
        </section>
      </main>
      <img src={heroImage}/>
    </section>
  );
};

export default HeroSection;
