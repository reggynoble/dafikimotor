import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Globals/Navbar";
import StyledHero from "./Globals/StyledHero";
import BackgroundSection from "./Globals/BackgroundSection";
import Footer from "./Globals/Footer";
import "./layout.css";
import "./bootstrap.min.css";
import Header from "./Globals/header"
const Layout = ({ children }) => (
    <>
        <Navbar />
        <Header />
        <StyledHero />
        <BackgroundSection/>
        <Footer />
        {children}
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
