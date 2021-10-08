import React from 'react'

import { ThemeProvider } from 'styled-components'
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


function Header(){
  return (
    <ThemeProvider theme={theme}>
    <>
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Dafikimotors builds communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussions.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
    </>
    </ThemeProvider>

  )
}
export default Header