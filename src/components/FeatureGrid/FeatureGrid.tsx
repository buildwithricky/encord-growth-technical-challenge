import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import FeatureCard from "./FeatureCard";
import { StaticImage } from "gatsby-plugin-image";
import { features } from "process";
// Feature Grid Component rendering a Feature Card

interface Feature {
  icon: string;
  title: string;
  description: any;
}
interface FeatureGridProps {
  title: string;
  features : Feature[]
}
const FeatureGrid:React.FC<FeatureGridProps> = ({title,features}) => {
    return (
      <section className="relative px-4 mx-auto mr-4 overflow-x-auto border-none sm:mx-12 xl:mx-auto sm:px-0 lg:px-5 max-w-7xl scroll-smooth no-scrollbar">
        <article className="py-10 xl:mx-11  gap-2 xs:gap-2.5 md:gap-6 flex lg:grid grid-cols-3">
          {features.map((feature:Feature) => (
            <FeatureCard
              icon={feature?.icon}
              title={feature?.title}
              description={feature?.description.description}
            />
          ))}
        </article>
      </section>
    );
};

export default FeatureGrid;
