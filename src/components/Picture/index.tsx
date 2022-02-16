import React from 'react'

import { Wrapper } from './styles'

type PictureProps = {
  url: string
  alternativeText: string
}

export const Picture = ({ url, alternativeText }: PictureProps) => (
  <Wrapper>
    <img src={url} alt={alternativeText} />
  </Wrapper>
)
