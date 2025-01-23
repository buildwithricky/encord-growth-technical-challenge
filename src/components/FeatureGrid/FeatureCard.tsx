import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

type featureCardProps = {
    title:string,
    icon:string,
    description:string
}

const FeatureCard = (props:featureCardProps) => {
    return (
        <div>
      <p>{props.title}</p>    
      <img src={props.icon} alt={props.title} />
      <p>{props.description}</p>
        </div>
      
    );
};

export default FeatureCard;
