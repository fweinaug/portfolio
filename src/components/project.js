import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faGooglePlay, faWindows } from "@fortawesome/free-brands-svg-icons"
import "./project.scss"

const Project = ({ title, text, color, tags, logo, screenshot, website, github, microsoftStore, playStore, right = false }) => (
  <div className="columns">
    <div className={"column is-8-tablet is-7-desktop is-6-widescreen " + (
      right
        ? "is-offset-3-tablet is-offset-4-desktop is-offset-5-widescreen"
        : "is-offset-1-tablet is-offset-1-desktop")}>
      <div className="box" style={{ borderTopColor: color }}>
        <div className="level pt-3">
          <div className="level-left">
            <div className="level-item">
              <figure className="image is-64x64">
                <Img fixed={logo} alt="Logo" />
              </figure>
            </div>
            <div className="level-item">
              <p className="title is-3 has-text-centered has-text-weight-bold" style={{ color: color }}>
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="tags">
                {tags.map((tag, index) => <span className="tag" key={index}>{tag}</span>)}
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              {
                playStore
                  ? <a className="button is-white" href={playStore} aria-label="Google Play Store" title="Google Play Store">
                      <FontAwesomeIcon icon={faGooglePlay} />
                    </a>
                  : null
              }
              {
                microsoftStore
                  ? <a className="button is-white" href={microsoftStore} aria-label="Microsoft Store" title="Microsoft Store">
                      <FontAwesomeIcon icon={faWindows } />
                    </a>
                  : null
              }
              {
                github
                  ? <a className="button is-white" href={github} aria-label="GitHub" title="GitHub">
                      <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                  : null
              }
              {
                website
                  ? <a className="button is-dark is-small ml-1" href={website}>
                      Learn more
                    </a>
                  : null
              }
            </div>
          </div>
        </div>
        <div className="columns is-mobile is-centered has-background-light">
          <div className={"column is-paddingless" + (screenshot.aspectRatio < 1.0 ? " is-6-mobile is-5-tablet py-2" : "")}>
            <figure className="image">
              <Img fluid={screenshot} alt="Screenshot" />
            </figure>
          </div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  </div>
)

export default Project
