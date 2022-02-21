import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    form {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xsmall};

      input,
      button,
      textarea {
        padding: ${theme.spacings.xsmall};
        font-size: ${theme.font.sizes.large};
        border-radius: 0.4rem;
        border: none;
      }

      button {
        background: ${theme.gradients.purple};
      }
    }
  `}
`
