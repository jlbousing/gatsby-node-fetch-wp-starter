import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"

const BlogPage = ({data}) => {

    return (

        <Layout>
          <SEO title="Blog" />
          <h1>Test blog</h1>
          <p>
            <Link to="/">Go to index page</Link> <br />
          </p>
          
          <Blog data={data}></Blog>
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
 query WordpressData {
  allWordpress {
    edges {
      node {
        id
        title
        date
        date_updated
        slug
        status
        media {
          id
          guid {
            rendered
          }
        }
        content
        author {
          id
          name
        }
      }
    }
  }
}
`

export default BlogPage;
