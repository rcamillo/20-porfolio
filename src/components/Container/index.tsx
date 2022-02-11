import React from 'react'

import { Wrapper, Content } from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}
