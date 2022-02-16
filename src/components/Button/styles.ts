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

    display: flex;
    align-items: center;
    justify-content: center;

    ${modifiers[gradientStyle](theme, backgroundStyle)};

    border-radius: 0.5rem;
    border: 2px solid transparent;
  `}
`
