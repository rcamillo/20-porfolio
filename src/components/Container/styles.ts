import styled, { css } from 'styled-components'

import { ContainerVariant } from '.'

type WrapperProps = {
  variant: ContainerVariant
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    background-color: ${variant === 'default'
      ? theme.colors.dark
      : theme.colors.darken};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
