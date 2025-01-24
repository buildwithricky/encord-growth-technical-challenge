import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import CallToAction from "../presentation/CallToActionSection/CallToAction";

const CallToActionContent = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCallToActionSection {
        callToActionText
        callToActionUrl
        heading
        subHeading {
          subHeading
        }
      }
    }
  `);
  const { heading, subHeading, callToActionText, callToActionUrl } =
    data.contentfulCallToActionSection;

  return (
    <CallToAction
      heading={heading}
      subHeading={subHeading}
    //   backgroundImage={image}
      callToActionText={callToActionText}
      callToActionUrl={callToActionUrl}
    />
  );
};

export default CallToActionContent;
