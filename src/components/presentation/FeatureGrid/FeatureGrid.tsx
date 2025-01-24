import React from "react";
import FeatureCard from "./FeatureCard";
import { Feature } from "./featureTypes";

interface FeatureGridProps {
  title: string;
  features : Feature[]
}
const FeatureGrid:React.FC<FeatureGridProps> = ({features}) => {
    return (
      <section className="relative mx-auto mr-4 overflow-x-auto border-none sm:px-0 smooth-scroll">
        <article
          className="py-10  xl:mx-11  gap-2 xs:gap-2.5  sm:gap-6 grid sm:grid sm:grid-cols-3"
        >
          {features.map((feature: Feature) => (
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
