import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import Contact from "../components/Home/Contact"
import { graphql } from "gatsby"


export default function inventory({ data }) {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "Background2.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
