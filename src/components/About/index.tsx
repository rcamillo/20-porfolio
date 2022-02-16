import React from 'react'
import { FaTwitch, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'

import { Picture } from '../Picture'

import { Wrapper, Bio, SocialWrapper } from './styles'

export const About = () => (
  <Wrapper>
    <Picture
      url="https://images.unsplash.com/photo-1624377632657-3902bfd35958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=100"
      alternativeText="foto de perfil de um programador"
    />
    <Bio>
      <h2>sobre mim</h2>
      <span>Belo Horizonte, Brasil</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
        commodo dolor, nec bibendum velit.
      </p>

      <SocialWrapper>
        <li>
          <a
            href="https://twitch.tv/devlucaslopes"
            title="Canal na Twitch"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/devlucaslopes"
            title="Canal no Youtube"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/devlucaslopes/"
            title="Perfil no Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/devlucaslopes"
            title="Perfil no GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </li>
      </SocialWrapper>
    </Bio>
  </Wrapper>
)
