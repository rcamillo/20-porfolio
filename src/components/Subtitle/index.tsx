import React from 'react'

import { Text } from './styles'

type SubtitleProps = {
  children: React.ReactNode
}

export const Subtitle = ({ children }: SubtitleProps) => <Text>{children}</Text>
