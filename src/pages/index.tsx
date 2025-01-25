import * as React from "react"
import { graphql, type HeadProps, type PageProps } from "gatsby"
import { Helmet } from "react-helmet";
import HeroContent from "../components/content/HeroContent"
import FeatureGridContent from "../components/content/FeatureGridContent"
import CallToActionContent from "../components/content/CallToAction"


// Landing Page Component contains helmet component for meta tags
interface SEOProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      author: string;
    };
  };
}
// TODO: Add navbar and footer here if required
const IndexPage: React.FC<PageProps<SEOProps>> = ({ data }) => {
  const { title, description,author,siteUrl } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={siteUrl} />
      </Helmet>

      <main className="relative max-w-6xl py-10 mx-auto sm:px-12 xl:px-0">
        <HeroContent />
        <FeatureGridContent />
        <CallToActionContent />
      </main>
    </>
  );
};

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
  }
`;