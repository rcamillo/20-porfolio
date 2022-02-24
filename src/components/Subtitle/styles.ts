import styled, { css } from 'styled-components'

export const Text = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 600;
    color: ${theme.colors.text};
  `}
`
