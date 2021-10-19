import React from "react"
import { StyledHeader, Nav, Logo, Image } from '../styles/Header.styled'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { Button } from '../styles/Button.styled'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Rankings</Button>
        </Nav>

        <Flex>
          <div>
            <h1>AutoMotive Reviews, News, Parts, Accessories & More</h1>

            <p>
              Dafikimotors.com is a place for Auto Lovers. We have done thorough research on all the products we feature.
              We give you all the information you need before you buy
            </p>

            <Button bg='#ff0099' color='#fff'>
              Blog
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
