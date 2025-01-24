import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroContent from "../components/content/HeroContent"
import FeatureGridContent from "../components/content/FeatureGridContent"
import CallToActionContent from "../components/content/CallToAction"

// TODO: Add navbar and footer here if required
const IndexPage: React.FC<PageProps> = () => {
  return (
  <main className="relative max-w-6xl py-10 mx-auto sm:px-12 xl:px-0">
    <HeroContent/>
    <FeatureGridContent/>
    <CallToActionContent/>
  </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
