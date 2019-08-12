import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ photos }) => {
  return (
    <u>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </u>
  )
}
