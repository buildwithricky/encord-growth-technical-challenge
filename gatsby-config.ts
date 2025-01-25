import type { GatsbyConfig } from "gatsby";
require('dotenv').config();
const config: GatsbyConfig = {
  siteMetadata: {
    title: `encoding-landing-page`,
    siteUrl: process.env.SITE_URL,
    author: "@patrick",
    description: `Encord landing page for high conversions`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-postcss',`gatsby-plugin-react-helmet`]
};

export default config;
