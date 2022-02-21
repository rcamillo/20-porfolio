import React from 'react'
import {
  FiTwitch,
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDownloadCloud,
  FiMail
} from 'react-icons/fi'
import { Button } from '../Button'

import { Picture } from '../Picture'
import { Subtitle } from '../Subtitle'

import { Wrapper, Bio, SocialWrapper, ButtonsWrapper } from './styles'

export const About = () => (
  <Wrapper>
    <Picture
      url="./imgs/profile.png"
      alternativeText="montagem com o corpo do Neymar (jogador de futebol) com o rosto do Lucas"
    />
    <Bio>
      <Subtitle>sobre mim</Subtitle>
      <span>Belo Horizonte, Brasil</span>
      <p>
        Há mais de 5 anos criando e resolvendo bugs! Atualmente trabalho como
        desenvolvedor de software e no meu tempo livre falo sobre programação e
        carreira para ajudar outras pessoas que gostariam de aprender sobre o
        mundo da tecnologia.
      </p>

      <SocialWrapper>
        <li>
          <a
            href="https://twitch.tv/devlucaslopes"
            title="Canal na Twitch"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitch size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/devlucaslopes"
            title="Canal no Youtube"
            target="_blank"
            rel="noreferrer"
          >
            <FiYoutube size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/devlucaslopes/"
            title="Perfil no Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/devlucaslopes"
            title="Perfil no GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={24} />
          </a>
        </li>
      </SocialWrapper>

      <ButtonsWrapper>
        <Button
          gradientStyle="pink"
          backgroundStyle="darken"
          href="https://www.linkedin.com/in/devlucaslopes/"
          target="_blank"
        >
          <FiDownloadCloud /> Currículo
        </Button>
        <Button
          gradientStyle="purple"
          backgroundStyle="darken"
          href="mailto:dev.thuram@gmail.com"
        >
          <FiMail /> E-mail
        </Button>
      </ButtonsWrapper>
    </Bio>
  </Wrapper>
)
