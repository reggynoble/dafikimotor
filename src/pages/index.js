import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="Dafiki Quality Motors"
        info=" Quality Pre-owned Automobiles, at affordable prices"
      >
        <Link to="/inventory" className="btn-white">
          explore our inventory
        </Link>
      </Banner>
    </SimleHero>
    <About />
    <Services />
  </Layout>
)
