import React from 'react'

import { About } from './components/About'
import { Contact } from './components/Contact'
import { Container } from './components/Container'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Projects } from './components/Projects'

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

      <Container variant="light">
        <Projects />
      </Container>

      <Container>
        <Contact />
      </Container>

      <Container variant="light">
        <Footer />
      </Container>
    </>
  )
}

export default App
