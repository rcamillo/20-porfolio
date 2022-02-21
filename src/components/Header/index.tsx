import React from 'react'

import { Wrapper, LogoLink, LinkList } from './styles'

export const Header = () => (
  <Wrapper>
    <div>
      <LogoLink href="#">
        <img src="./imgs/logo.svg" alt="" />
      </LogoLink>
    </div>

    <nav>
      <LinkList>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </LinkList>
    </nav>
  </Wrapper>
)
