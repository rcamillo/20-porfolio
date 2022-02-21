import styled, { css, keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -46rem 0;
  }

  100% {
    background-position: 46rem 0;
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 36rem;
    height: 36rem;
    border-radius: 0.5rem;
    display: inline-block;
    position: relative;
    overflow: hidden;

    background-color: ${theme.colors.dark};
    background-image: linear-gradient(
      to right,
      #121212 0%,
      #c4c4c4 20%,
      #121212 40%,
      #121212 100%
    );
    background-repeat: no-repeat;
    background-size: 1080rem;

    animation: ${shimmer} 1s ease-in-out infinite alternate;

    &::before {
      content: '';
      position: absolute;
      width: 0.4rem;
      height: 100%;
      background-color: ${theme.colors.primary};
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;

      transition: transform 200ms ease-in-out;

      &:hover {
        transform: scale(1.3);
      }
    }
  `}
`
