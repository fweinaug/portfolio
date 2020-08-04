import React from "react"
import Project from "./project"
import { graphql, useStaticQuery } from "gatsby"

const path = require(`path`)

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 10
      ) {
        edges {
          node {
            fileAbsolutePath
            html
            frontmatter {
              title
              color
              tags
              website
              github
              play_store
              microsoft_store
            }
          }
        }
      }
      allLogo: allFile(filter: {
        extension: {eq:"png"}
        relativeDirectory: {eq: "logos"}
      }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      allScreenshot: allFile(filter: {
        extension: {eq:"png"}
        relativeDirectory: {eq: "screenshots"}
      }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                aspectRatio
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges.map(({ node }, index) => {
    const { title, color, tags, website, github, play_store, microsoft_store } = node.frontmatter
    const { html } = node

    const name = path.basename(node.fileAbsolutePath, '.md')
    const logoFixed = data.allLogo.edges.find(edge => edge.node.name === name).node.childImageSharp.fixed
    const screenshotFluid = data.allScreenshot.edges.find(edge => edge.node.name === name).node.childImageSharp.fluid

    const isEven = (index & 1) === 0

    return <Project key={name} title={title} text={html} color={color} tags={tags}
                    logo={logoFixed} screenshot={screenshotFluid} website={website}
                    github={github} microsoftStore={microsoft_store} playStore={play_store}
                    right={isEven} />
    }
  )

  return (
    <section className="section">
      <div className="container">
        {projects}
      </div>
    </section>
  )
}

export default Projects
