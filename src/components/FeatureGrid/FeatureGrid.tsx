import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import FeatureCard from "./FeatureCard";


// Feature Grid Component rendering a Feature Card
const FeatureGrid = () => {
    const staticData = [
      {
        icon: "M",
        title: "Multimodal annotation",
        description: " Efficiency label data ",
      },
      {
        icon: "M",
        title: "Multimodal annotation",
        description: " Efficiency label data ",
      },
    ];
    return (
      <section className="relative px-4 mx-auto mr-4 overflow-x-auto border-none sm:mx-12 xl:mx-auto sm:px-0 lg:px-5 max-w-7xl scroll-smooth no-scrollbar">
        <article className="py-10 xl:mx-11  gap-2 xs:gap-2.5 md:gap-6 flex lg:grid grid-cols-3">
          {staticData.map((cardItem) => (
            <FeatureCard
              icon={cardItem?.icon}
              title={cardItem?.title}
              description={cardItem?.description}
            />
          ))}
        </article>
      </section>
    );
};

export default FeatureGrid;
