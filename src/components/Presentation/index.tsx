import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

import { Button } from '../Button'
import { Looper } from '../Looper'

import { Wrapper, ButtonsWrapper } from './styles'

export const Presentation = () => (
  <Wrapper id="home">
    <div>
      <span>Olá, eu sou</span>
      <h1>Renan Camillo</h1>
      <h2>Desenvolvedor Front-End.</h2>

      <ButtonsWrapper>
        <Button
          gradientStyle="purple"
          href="https://www.linkedin.com/in/renan-camillo/"
          target="_blank"
          title="Ver perfil no LinkedIn"
        >
          <FiLinkedin /> LinkedIn
        </Button>

        <Button
          href="https://github.com/rcamillo"
          target="_blank"
          title="Ver perfil no GitHub"
        >
          <FiGithub /> GitHub
        </Button>
      </ButtonsWrapper>
    </div>

    <div className="wrapper-looper">
      <Looper />
    </div>
  </Wrapper>
)
