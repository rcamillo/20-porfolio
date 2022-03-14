import React, { AnchorHTMLAttributes } from 'react'

import { Link } from './styles'

export type ButtonGradientStyle = 'pink' | 'purple'

export type ButtonBackgroundStyle = 'background-1' | 'background-2'

type ButtonProps = {
  children: React.ReactNode
  gradientStyle?: ButtonGradientStyle
  backgroundStyle?: ButtonBackgroundStyle
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = ({
  children,
  gradientStyle = 'pink',
  backgroundStyle = 'background-1',
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
