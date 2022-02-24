import React from 'react'
import { FiLink } from 'react-icons/fi'

import { Button } from '../Button'
import { Picture } from '../Picture'

import { Wrapper, Title, Description, Stack } from './styles'

type ProjectDescriptionProps = {
  title: string
  description: string
  stack: string
  link: string
}

export const ProjectDescription = ({
  title,
  description,
  stack,
  link
}: ProjectDescriptionProps) => (
  <Wrapper>
    <a href="#">
      <Picture
        url="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alternativeText={title}
      />
    </a>

    <Title>{title}</Title>

    <Description>{description}</Description>

    <Stack>{stack}</Stack>

    <Button
      href={link}
      target="_blank"
      gradientStyle="purple"
      backgroundStyle="background-2"
    >
      <FiLink /> Visualizar
    </Button>
  </Wrapper>
)
