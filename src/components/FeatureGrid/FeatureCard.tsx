import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

type featureCardProps = {
    title:string,
    icon:string,
    description:string
}

const FeatureCard = (props:featureCardProps) => {
    return (
      <div className="max-w-xs px-4 py-5 border border-red-500 group sm:px-5 sm:py-7 md:px-6 md:py-6">
        <div className="flex gap-2.5 items-start min-h-[56px]">
          <p>{props.title}</p>
          <img src={props.icon} alt={props.title} />
        </div>
        <p className="pt-2.5 text-sm md:text-base text-gray-600">
          {props.description}
        </p>
      </div>
    );
};

export default FeatureCard;
