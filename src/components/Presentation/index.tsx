import React from 'react'

import { Looper } from '../Looper'

import { Wrapper } from './styles'

export const Presentation = () => (
  <Wrapper>
    <div>
      <span>Olá, eu sou</span>
      <h1>Lucas Lopes</h1>
      <h2>Desenvolvedor Front-End.</h2>
    </div>

    <div className="wrapper-looper">
      <Looper />
    </div>
  </Wrapper>
)
