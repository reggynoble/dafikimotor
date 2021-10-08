import React from "react";
import get from 'lodash/get'
import Img from "gatsby-image"
import ReactDOM from 'react-dom'
import { Link, graphql } from "gatsby";


import Layout from "../components/Layout/Layout"
import Banner from "../components/Globals/Banner"
import Rankings from "../components/Home/Rankings"
import App from "../components/Home/App"
import Header from "../components/Home/Header"

import Services from "../components/Home/Services"

import Vehicles from "../components/Inventory/Vehicles"


import Seo from "../components/Globals/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Navbar from "../components/Globals/Navbar";
import services from "../components/Globals/Services";

import StyledHero from "../components/Globals/StyledHero"
import links from "../components/constants/links";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Info from "../components/Home/Info";
import Menu from "../components/Inventory/Menu";
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render(){

  const posts = get(this, 'props.data.allContentfulBlogPost.edges')
  return (
     <Layout>
     <services />
         <Header />
      <Info />

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


