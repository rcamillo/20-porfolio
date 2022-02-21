import React from 'react'

import { ContactForm } from '../ContactForm'
import { Subtitle } from '../Subtitle'

import { Wrapper } from './styles'

export const Contact = () => (
  <Wrapper>
    <Subtitle>👋 Manda um salve!</Subtitle>

    <ContactForm />
  </Wrapper>
)
