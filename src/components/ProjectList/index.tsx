import React from 'react'

import data from './data.json'

import { ProjectDescription } from '../ProjectDescription'

import { Wrapper } from './styles'

export const ProjectList = () => (
  <Wrapper>
    {data.map((project) => (
      <ProjectDescription key={project.id} {...project} />
    ))}
  </Wrapper>
)
