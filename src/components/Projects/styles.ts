import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.large} * 2) 0;
  `}
`
