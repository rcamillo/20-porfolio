import React from 'react'

import { Wrapper, LogoLink, LinkList } from './styles'

export const Header = () => (
  <Wrapper>
    <div>
      <LogoLink href="#">Portfólio</LogoLink>
    </div>

    <nav>
      <LinkList>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#">Experiência</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
      </LinkList>
    </nav>
  </Wrapper>
)
