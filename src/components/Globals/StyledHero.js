import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledHero = ({img, className, children,
home})=> {
    return(
      <BackgroundImage className={className} fluid ={img}
      home={home}>
      <h1> Dafikimotors </h1>
      {children}
      </BackgroundImage>
    )
}

export default styled(StyledHero)`
    min-height: 200 px;
    background: grey;
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    `





