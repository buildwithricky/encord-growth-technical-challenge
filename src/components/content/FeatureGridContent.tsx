import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import FeatureGrid from "../presentation/FeatureGrid/FeatureGrid";


// Feature Grid content Layer
const FeatureGridContent = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFeatureGroup {
        title
        features {
          icon {
         url
          }
          title
          description {
            description
          }
        }
      }
    }
  `);
  console.log(data);
  const {title, features} = data.contentfulFeatureGroup
  console.log(title, features)
  return (
    <FeatureGrid
     title = { title}
     features = { features }
     />
  );
};

export default FeatureGridContent;
