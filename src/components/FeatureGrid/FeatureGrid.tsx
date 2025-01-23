import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import FeatureCard from "./FeatureCard";


// Feature Grid Component rendering a Feature Card
const FeatureGrid = () => {
    const staticData = [
        {
            icon:"",
            title:"",
            description:""
        }
    ]
    return (
      <section>
        <div>
          {staticData.map((cardItem) => (
            <FeatureCard icon ={cardItem?.icon} title={cardItem?.title} description={cardItem?.description} />
          ))}
        </div>
      </section>
    );
};

export default FeatureGrid;
