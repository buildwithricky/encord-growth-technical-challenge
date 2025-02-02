import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import HeroSection from "../presentation/HeroSection/HeroSection";
import React from "react";


//Hero section content layer
const HeroContent  = ()=>{
    const data = useStaticQuery(graphql`
      query {
        contentfulHeroSection {
          heading
          subHeading {
            id
            subHeading
          }
          backgroundImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          callToActionUrl
          callToActionText
        }
      }
    `);
 const { heading, subHeading, backgroundImage,callToActionText } = data.contentfulHeroSection;
 const image = getImage(backgroundImage) as IGatsbyImageData;
  return (
    <HeroSection
      heading={heading}
      subHeading={subHeading}
      backgroundImage={image}
      callToActionText={callToActionText}
    />
  );
};

export default HeroContent;