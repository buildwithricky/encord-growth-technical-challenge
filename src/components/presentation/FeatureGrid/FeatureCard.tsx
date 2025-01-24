import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Feature } from "./featureTypes";



const FeatureCard = (props:Feature) => {
      return (
        <div className="w-full flex-nowrap border border-secondary  px-3 py-4 sm:px-5 sm:py-5 md:px-[22px] md:py-[22px]">
          <div className="flex gap-2.5 items-start min-h-[56px] justify-between ">
            <p>{props.title}</p>
            <img
              loading="lazy"
              src={props.icon.url}
              alt="feature logo"
              className="w-10 h-10"
            />
          </div>
          <p className="pt-2.5 text-sm md:text-base text-gray-600">
            {props.description}
          </p>
        </div>
      );
};

export default FeatureCard;
