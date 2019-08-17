import React from 'react'
import { Loader } from '../styles/loader'
import { Query } from 'react-apollo'
import { GET_FAVS } from '../querys/GetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader />
  if (error) return <p>No estas logueado</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    { renderProp }
  </Query>
)
