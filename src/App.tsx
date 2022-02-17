import React from 'react'

import { About } from './components/About'
import { Container } from './components/Container'
import { Experiences } from './components/Experiences'
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

      <Container variant="light">
        <About />
      </Container>

      <Container>
        <Experiences />
      </Container>
    </>
  )
}

export default App
