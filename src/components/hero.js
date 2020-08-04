import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn, faTwitter, faXing } from "@fortawesome/free-brands-svg-icons"
import Greeting from "./greeting"
import "./hero.scss"

const Hero = () => (
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8 is-7-desktop is-6-widescreen is-5-fullhd">
            <h1 className="title is-1">
              <Greeting />
            </h1>
            <p className="subtitle is-family-secondary my-2">
              My name is <b>Florian</b> and I'm a software engineer.
            </p>
            <p className="content has-text-weight-light">
              I have more than 15 years of professional experience. Technologies I enjoy working with include
              Flutter, React, Gatsby, Xamarin and ASP.NET Core. Furthermore, I'm interested in Domain Driven
              Design, UX, Usability and Clean Code. I live in Hamburg, Germany.
            </p>
            <div className="buttons">
              <a className="button is-light" href="https://github.com/fweinaug/" title="GitHub">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
              </a>
              <a className="button is-light" href="https://twitter.com/fweinaug/" title="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg"/>
              </a>
              <a className="button is-light" href="https://www.linkedin.com/in/florian-weinaug-601211b4/"
                 title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
              </a>
              <a className="button is-light" href="https://www.xing.com/profile/Florian_Weinaug" title="Xing">
                <FontAwesomeIcon icon={faXing} size="lg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
