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

        <Flex>
          <div>
            <h1>Modern Auto Reviews, News, & More</h1>


            <Button bg='#ff0099' color='#fff'>
              Parts & Accessories
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
