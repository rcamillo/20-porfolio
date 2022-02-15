import React from 'react'

import { Container } from './components/Container'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container>
        <Presentation />
      </Container>

      <Container>uahsuahs</Container>
    </>
  )
}

export default App
