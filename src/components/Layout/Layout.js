import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Globals/Navbar";
import StyledHero from "../Globals/StyledHero";
import BackgroundSection from "../Globals/BackgroundSection";
import Footer from "../Globals/Footer";
import "./layout.css";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <StyledHero />
    <BackgroundSection/>
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
