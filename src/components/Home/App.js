import React from "react"
import { ThemeProvider } from 'styled-components'
import Header from './Header'
import HomeFooter from './HomeFooter'
import Card from '../styles/Card'
import { Container } from '../styles/Container.styled'
import GlobalStyles from '../styles/Global'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
