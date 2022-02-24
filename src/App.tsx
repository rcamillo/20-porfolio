import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

// import { About } from './components/About'
// import { Contact } from './components/Contact'
import { Container } from './components/Container'
// import { Experiences } from './components/Experiences'
// import { Footer } from './components/Footer'
// import { GoToTop } from './components/GoToTop'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
// import { Projects } from './components/Projects'

import GlobalStyles from './styles/global'
import { setupTheme, theme as defaultTheme } from './styles/theme'

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [theme, setTheme] = useState<typeof defaultTheme>(defaultTheme)

  useEffect(() => {
    setTheme(setupTheme(isDark))
  }, [isDark])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  const listenToScroll = () => {
    const heightToShowFrom = 600
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll >= heightToShowFrom) {
      setShowGoToTop(true)
    } else {
      setShowGoToTop(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Container>
          <Header themeIsDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        </Container>
        <Container>
          <Presentation />
        </Container>
        {/*
        {showGoToTop && <GoToTop />}
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
        </Container> */}
      </>
    </ThemeProvider>
  )
}

export default App
