import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({
  data: { photos = []
  }
} = {}) => {
  return (
    <u>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </u>
  )
}
