import React from 'react'

import { Wrapper } from './styles'

import { Subtitle } from '../Subtitle'
import { ProjectList } from '../ProjectList'

export const Projects = () => (
  <Wrapper id="projects">
    <Subtitle>projetos</Subtitle>

    <ProjectList />
  </Wrapper>
)
