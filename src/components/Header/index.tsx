import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

import { Wrapper, LogoLink, LinkList, ToggleButton } from './styles'

type HeaderProps = {
  themeIsDark: boolean
  toggleTheme: () => void
}

export const Header = ({ themeIsDark, toggleTheme }: HeaderProps) => {
  return (
    <Wrapper id="nav">
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
          <li>
            <ToggleButton type="button" onClick={toggleTheme}>
              {themeIsDark ? <FiSun size={24} /> : <FiMoon size={24} />}
            </ToggleButton>
          </li>
        </LinkList>
      </nav>
    </Wrapper>
  )
}
