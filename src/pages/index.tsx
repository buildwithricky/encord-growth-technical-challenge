import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection/HeroSection"
import FeatureGrid from "../components/FeatureGrid/FeatureGrid"
import CallToAction from "../components/CallToActionSection/CallToAction"
import Navbar from "../components/NavigationBar/NavigationBar"
import HeroContent from "../components/content/HeroContent"
import FeatureGridContent from "../components/content/FeatureGridContent"
import CallToActionContent from "../components/content/CallToAction"


const IndexPage: React.FC<PageProps> = () => {
  return (
  <main className="relative max-w-6xl py-10 mx-auto sm:px-12 xl:px-0">
    <Navbar/>
    <HeroContent/>
    <FeatureGridContent/>
    <CallToActionContent/>
  </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
