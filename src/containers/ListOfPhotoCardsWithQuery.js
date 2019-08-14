import React from 'react'
import { Query } from 'react-apollo'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { GET_PHOTOS } from '../querys/GetPhotos'

const renderProp = ({ loading, error, data }) => {
  const { photos = [] } = data
  return <ListOfPhotoCards photos={photos} />
}

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => {
  return (
    <Query query={GET_PHOTOS} variables={{ categoryId }}>
      { renderProp }
    </Query>
  )
}
