import React from "react";
import get from 'lodash/get'
import { Link, graphql } from "gatsby";
import Layout from '../components/Layout/Layout'
import App from "../components/Home/App"
import Info from "../components/Home/Info";
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render(){

  const posts = get(this, 'props.data.allContentfulBlogPost.edges')
  return (
     <Layout>
      <App />
      <div className="container">
        <h2 className="section-headline">Recent articles</h2>
        <ul className="article-list">
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            )
          })}
        </ul>
      </div>

    </Layout>

  );
  }
}
export default RootIndex

export const query = graphql`
  {
    img: file(relativePath: { eq: "Background2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
   } 
`


