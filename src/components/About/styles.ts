import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.large} * 2) 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.large};
  `}
`
