import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, language }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          language
        }
      }
    }
  `)

  const lang = language || site.siteMetadata.language
  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  }

  return (
    <Helmet defaultTitle={seo.title}>
      <html lang={lang} />
      <meta property="description" content={seo.description} />
    </Helmet>
  )
}

export default SEO
