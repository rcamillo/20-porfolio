import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.dark};
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    background: #ccc;
    margin: 0 auto;
  `}
`
