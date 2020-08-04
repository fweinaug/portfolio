import React from "react"
import Hero from "../components/hero"
import Projects from "../components/projects"
import SEO from "../components/seo"
import "./styles.scss"

const Home = () => (
  <div className="has-background-light">
    <SEO />
    <Hero />
    <Projects />
  </div>
)

export default Home
