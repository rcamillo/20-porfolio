import React from 'react'
import { Wrapper } from './styles'

export const ContactForm = () => (
  <Wrapper>
    <form>
      <input type="text" placeholder="Seu nome" />
      <input type="email" placeholder="E-mail" />
      <textarea placeholder="Digite sua mensagem aqui"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </Wrapper>
)
