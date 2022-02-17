import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.large} * 2) 0;
  `}
`
