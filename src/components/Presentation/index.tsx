import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

import { Button } from '../Button'
import { Looper } from '../Looper'

import { Wrapper, ButtonsWrapper } from './styles'

export const Presentation = () => (
  <Wrapper>
    <div>
      <span>Olá, eu sou</span>
      <h1>Lucas Lopes</h1>
      <h2>Desenvolvedor Front-End.</h2>

      <ButtonsWrapper>
        <Button
          gradientStyle="purple"
          href="https://www.linkedin.com/in/devlucaslopes/"
          target="_blank"
        >
          <FaLinkedinIn /> LinkedIn
        </Button>

        <Button
          href="https://www.linkedin.com/in/devlucaslopes/"
          target="_blank"
        >
          <FaLinkedinIn /> LinkedIn
        </Button>
      </ButtonsWrapper>
    </div>

    <div className="wrapper-looper">
      <Looper />
    </div>
  </Wrapper>
)
