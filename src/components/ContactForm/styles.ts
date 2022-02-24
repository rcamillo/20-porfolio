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
      }

      input,
      textarea {
        border: 2px solid ${theme.colors['background-2']};
      }

      button {
        background: ${theme.gradients.purple};
        color: ${theme.colors.text};
      }
    }
  `}
`
