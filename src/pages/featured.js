import React from "react";
import Img from "gatsby-image"
import ReactDOM from 'react-dom'
import { Link, graphql } from "gatsby";


import Layout from "../components/Layout/Layout"
import Banner from "../components/Globals/Banner"
import Rankings from "../components/Home/Rankings"

import Services from "../components/Home/Services"

import Vehicles from "../components/Inventory/Vehicles"


import SEO from "../components/Globals/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Navbar from "../components/Globals/Navbar";
import services from "../components/Globals/Services";

import StyledHero from "../components/Globals/StyledHero"
import links from "../components/constants/links";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Info from "../components/Home/Info";
import Menu from "../components/Inventory/Menu";


export const query = graphql`
  {
    img: file(relativePath: { eq: "Background2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulVehicles {
      edges {
        node {
          id
          title
          price
          capacity
          transmission
          mileage
          description
          model
          images {
            fluid(maxHeight: 300) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <StyledHero home="true">
      <Banner
        title="Dafiki Quality Motors"
        info=" Quality Auto parts, at affordable prices"
      >
        <AniLink fade to="/contact" className="btn-white">
          explore our inventory of parts and accessories
        </AniLink>
      </Banner>
    </StyledHero>
    <Menu items={data.menu} />


    </Layout>
  );
