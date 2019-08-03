import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/2614/night-animal-pet-eyes.jpg?cs=srgb&dl=animal-black-cat-2614.jpg&fm=jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
