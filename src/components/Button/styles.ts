import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonGradientStyle, ButtonBackgroundStyle } from '.'

type LinkProps = {
  gradientStyle: ButtonGradientStyle
  backgroundStyle: ButtonBackgroundStyle
}

const modifiers = {
  pink: (theme: DefaultTheme, backgroundStyle: ButtonBackgroundStyle) => css`
    background: ${theme.gradients[backgroundStyle]} padding-box,
      ${theme.gradients.pink} border-box;
  `,
  purple: (theme: DefaultTheme, backgroundStyle: ButtonBackgroundStyle) => css`
    background: ${theme.gradients[backgroundStyle]} padding-box,
      ${theme.gradients.purple} border-box;
  `
}

export const Link = styled.a<LinkProps>`
  ${({ theme, gradientStyle, backgroundStyle }) => css`
    display: block;
    width: 15rem;
    height: 4.5rem;
    text-transform: capitalize;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(${theme.spacings.xsmall} / 2);

    border-radius: 0.5rem;
    border: 2px solid transparent;

    font-size: ${theme.spacings.xsmall};
    font-weight: 600;
    color: ${theme.colors.light};

    ${modifiers[gradientStyle](theme, backgroundStyle)};

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: inherit;
    }

    transition: filter 100ms ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
