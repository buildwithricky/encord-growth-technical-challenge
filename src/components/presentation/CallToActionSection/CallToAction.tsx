import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import CustomButton from "../../ui/CustomButton/CustomButton";
interface CallToActionProps {
  heading:string;
  subHeading:{subHeading:string};
  callToActionText:string;
  callToActionUrl:string;
}

// Call to action component

const CallToAction:React.FC<CallToActionProps> = ({heading,subHeading,callToActionText,callToActionUrl}) => {
    const data = useStaticQuery(graphql`
      query {
        allFile(filter: { extension: { regex: "/(jpg|jpeg|png|gif)/" } }) {
          nodes {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name
          }
        }
      }
    `);

    return (
      <section className="relative z-10 w-full px-4 py-16 mt-5 mb-10 text-center text-white rounded-md bg-primary lg:px-32 lg:py-20 sm:px-9 sm:mx-auto max-w-7xl">
        {data.allFile.nodes.map((image:any, index:any) => {
          const imageData = getImage(image.childImageSharp);
          return (
            <div
              key={index}
              className="h-full w-full absolute inset-0 -z-10 rounded-2.5xl"
            >
              <GatsbyImage
                image={imageData}
                alt={image.name}
                className="w-full h-full object-cover rounded-2.5xl"
              />
            </div>
          );
        })}
        <div className="flex flex-col justify-center w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mx-auto sm:text-3.25xl px-5 sm:px-24 lg:px-0 lg:text-4.5xl max-w-[700px] leading-8 sm:leading-10  lg:leading-12 ">
            {heading}
          </h2>
          <p className="mb-5 sm:mb-7 mt-3.5 sm:mt-6 text-sm sm:text-lg text-gray-2200 md:px-5 leading-5 sm:leading-7 max-w-[720px] mx-auto sm:px-10 lg:px-0">
            {subHeading?.subHeading}
          </p>
          <section>
            <form
              action={callToActionUrl}
              onSubmit={() => alert("form submitted")}
              className="relative flex flex-col w-full gap-3 mb-4 sm:flex-row"
            >
              <input
                type="text"
                placeholder="Your email address"
                className="w-full text-primary   pl-[22px] pr-20 sm:pr-32 py-3.5 ring-0"
              />
              <CustomButton
                btnText={callToActionText}
                classes="w-full px-6 py-3 font-semibold text-white rounded-lg shadow-lg sm:max-w-fit bg-primary focus:outline-none focus:ring-2"
              />
            </form>
          </section>
        </div>
      </section>
    );
};

export default CallToAction;
