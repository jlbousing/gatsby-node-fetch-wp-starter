import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"


export default ({ data }) => {
  const post = data.allWordpress.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p> By: {post.author.name} </p>
        <p> On: {post.date} </p>
      </div>
      <br></br>
      <Link to="/blog/">Volver al inicio del blog</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpress(filter: { slug: { eq: $slug } }) {
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
}`;