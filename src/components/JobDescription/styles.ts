import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const slideIn = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

type WrapperProps = {
  isActive: boolean
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ isActive }) => css`
    display: none;

    ${isActive &&
    css`
      display: block;
      animation: ${slideIn} 500ms ease-in-out forwards;
    `}
  `}
`

export const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2,
    span {
      font-weight: 500;
    }

    h2 {
      font-size: ${theme.font.sizes.large};
    }

    span {
      font-size: ${theme.font.sizes.small};
    }

    ${media.greaterThan('medium')`
      h2 {
        font-size: ${theme.font.sizes.xlarge};
      }

      span {
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const Company = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;
    color: ${theme.colors.primary};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.grayLight};
    font-weight: 300;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
