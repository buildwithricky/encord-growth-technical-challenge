import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";

const HeroSection = () => {
    return (
      <section>
        <main>
          <h1>Multimodal Ai</h1>
          <h1>The fastest way to manage, curate and annotate AI data</h1>
          <p>
            Manage, curate, and label multimodal data such as image, video,
            audio, document, text and DICOM files – all on one platform.
            Transform petabytes of unstructured data into high quality data for
            training, fine-tuning, and aligning AI models, fast.
          </p>
          <form onSubmit={()=>alert("form submitted")}>
            <input type="text" placeholder="Your email address" />
            <button type="submit">Get started</button>
          </form>
        </main>
      </section>
    );
};

export default HeroSection;
