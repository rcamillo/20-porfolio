import styled, { css } from 'styled-components'

import * as PictureStyles from '../Picture/styles'

export const Wrapper = styled.div`
  ${PictureStyles.Wrapper} {
    width: 100%;
    height: 20rem;
  }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0 ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.xlarge};
    text-transform: initial;
    color: ${theme.colors.text};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 300;
    color: ${theme.colors.grayLight};
  `}
`

export const Stack = styled.span`
  ${({ theme }) => css`
    display: block;
    margin: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
    color: ${theme.colors.primary};
  `}
`
