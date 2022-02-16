import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.large} * 2) 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.large};
  `}
`

export const Bio = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.light};

    h2 {
      text-transform: uppercase;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 600;
    }

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
        color: ${theme.colors.light};
      }
    }
  `}
`
