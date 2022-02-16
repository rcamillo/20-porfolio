import React, { AnchorHTMLAttributes } from 'react'

import { Link } from './styles'

export type ButtonGradientStyle = 'pink' | 'purple'

export type ButtonBackgroundStyle = 'dark' | 'darken'

type ButtonProps = {
  children: React.ReactNode
  gradientStyle?: ButtonGradientStyle
  backgroundStyle?: ButtonBackgroundStyle
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = ({
  children,
  gradientStyle = 'pink',
  backgroundStyle = 'dark',
  ...props
}: ButtonProps) => (
  <Link
    {...props}
    backgroundStyle={backgroundStyle}
    gradientStyle={gradientStyle}
  >
    {children}
  </Link>
)
