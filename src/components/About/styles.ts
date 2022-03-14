import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.large} * 2) 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`

export const Bio = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};

    span {
      font-size: ${theme.font.sizes.large};
      font-weight: 500;
      margin: ${theme.spacings.large} 0 ${theme.spacings.xsmall} 0;
      display: block;
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: 300;
      color: ${theme.colors.grayLight};
    }
  `}
`

export const SocialWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    margin: ${theme.spacings.large} 0;

    svg {
      color: ${theme.colors.primary};
    }

    a > svg {
      transition: color 300ms ease-in-out;
    }

    a:hover {
      svg {
        color: ${theme.colors.text};
      }
    }
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;
    gap: ${theme.spacings.small};
  `}
`
