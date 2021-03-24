import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => {

    return (

        <Layout>
          <SEO title="Blog" />
          <h1>Test blog</h1>
          
          <p>
            <Link to="/">Go to index page</Link> <br />
          </p>
        </Layout>
      )
}

/*
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
` */

export const query = graphql`
    query WordpreessPost {
        wordpress{
		    id
            title
            slug
            date
            date_updated
            content
        }
}
`

export default BlogPage;
