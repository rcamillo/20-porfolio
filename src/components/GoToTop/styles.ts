import styled, { css, keyframes } from 'styled-components'

const goUp = keyframes`
  from {
    transform: translateY(64px)
  }
  to {
    transform: translateY(0)
  }
`

export const Wrapper = styled.a`
  ${({ theme }) => css`
    width: 6.8rem;
    height: 6.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 2px solid ${theme.colors.primary};

    position: fixed;
    bottom: ${theme.spacings.small};
    right: ${theme.spacings.small};

    svg {
      color: ${theme.colors.primary};
    }

    animation: ${goUp} 500ms forwards;
  `}
`
