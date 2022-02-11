import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: calc(100vh - 11rem);
    display: flex;
    align-items: center;

    > div {
      text-transform: uppercase;
      font-weight: 600;

      h1 {
        font-size: ${theme.font.sizes.huge};
        color: ${theme.colors.primary};
        padding: calc(${theme.spacings.small} / 2) 0;
      }

      span,
      h2 {
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.light};
      }
    }
  `}
`
