import React from 'react'
import { Query } from 'react-apollo'
import { PhotoCard } from '../components/PhotoCard'
import { GET_SINGLE_PHOTO } from '../querys/GetSinglePhoto'
import { Loader } from '../styles/loader'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader size={60} />
  if (error) return <h1>Error verifica...</h1>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
)
