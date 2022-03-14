import React from 'react'
import {
  FiInstagram,
  FiGithub,
  FiDownloadCloud,
  FiMail,
  FiLinkedin
} from 'react-icons/fi'
import { Button } from '../Button'

import { Picture } from '../Picture'
import { Subtitle } from '../Subtitle'

import { Wrapper, Bio, SocialWrapper, ButtonsWrapper } from './styles'

export const About = () => (
  <Wrapper id="about">
    <Picture
      url="./imgs/profile.png"
      alternativeText="montagem com o corpo do Neymar (jogador de futebol) com o rosto do Lucas"
    />
    <Bio>
      <Subtitle>sobre mim</Subtitle>
      <span>Assis, Brasil</span>
      <p>
        Há mais de 3 anos criando e resolvendo bugs! Atualmente trabalho como
        desenvolvedor de software voltado para Front-end.
      </p>

      <SocialWrapper>
        <li>
          <a
            href="https://www.linkedin.com/in/renan-camillo/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rcamillo"
            title="Perfil no GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/renan.ca/"
            title="Perfil no Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={24} />
          </a>
        </li>
      </SocialWrapper>

      <ButtonsWrapper>
        <Button
          gradientStyle="pink"
          backgroundStyle="background-2"
          href="https://drive.google.com/file/d/113qjmZGcDiFKMAjzG48hL7R57tBzeAaY/view?usp=sharing"
          target="_blank"
        >
          <FiDownloadCloud /> Currículo
        </Button>
        <Button
          gradientStyle="purple"
          backgroundStyle="background-2"
          href="mailto:rcamillo12@gmail.com"
        >
          <FiMail /> E-mail
        </Button>
      </ButtonsWrapper>
    </Bio>
  </Wrapper>
)
