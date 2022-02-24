import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ContainerVariant } from '.'

type WrapperProps = {
  variant: ContainerVariant
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: ${variant === 'default'
      ? theme.colors['background-1']
      : theme.colors['background-2']};

    ${media.greaterThan('large')`
      padding: 0;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
