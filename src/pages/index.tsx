import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection/HeroSection"
import FeatureGrid from "../components/FeatureGrid/FeatureGrid"
import CallToAction from "../components/CallToActionSection/CallToAction"


const IndexPage: React.FC<PageProps> = () => {
  return (
  <main>
    <HeroSection/>
    {/* <FeatureGrid/>
    <CallToAction/> */}
  </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
