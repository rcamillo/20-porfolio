import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const appear = keyframes`
  from {
    width: 0%;
    background-color: #00D2DF;
  }
  to {
    width: 100%;
    background-color: #151515;
  }
`

const hover = keyframes`
  from {
    width: 0%;
    background-color: #151515;

  }
  to {
    width: 90%;
    background-color: #00D2DF;
  }
`

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -1.6rem;
      left: 0;
      width: 100%;
      height: 2px;

      animation: ${appear} 1s linear forwards;
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
      justify-content: space-between;
      flex-direction: row;

      &::after {
        bottom: 0;
      }
    `}
  `}
`

export const LogoLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    font-weight: 500;
  `}
`

export const LinkList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.small};
    align-items: center;
    justify-content: center;

    a {
      position: relative;

      &:hover {
        color: #fff;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          background-color: ${theme.colors.primary};
          animation: ${hover} 300ms linear forwards;
        }
      }
    }

    ${media.greaterThan('medium')`
      gap: calc(${theme.spacings.medium} * 2);
    `}
  `}
`

export const ToggleButton = styled.button`
  ${({ theme }) => css`
    svg {
      color: ${theme.colors.text}
  `}
`
