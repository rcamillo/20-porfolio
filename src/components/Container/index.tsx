import React from 'react'

import { Wrapper, Content } from './styles'

export type ContainerVariant = 'default' | 'light'

type ContainerProps = {
  children: React.ReactNode
  variant?: ContainerVariant
}

export const Container = ({
  children,
  variant = 'default'
}: ContainerProps) => {
  return (
    <Wrapper variant={variant}>
      <Content>{children}</Content>
    </Wrapper>
  )
}
