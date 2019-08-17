import React from 'react'
import { Link, Image, Grid } from './styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>)
      }
    </Grid>
  )
}

ListOfFavs.prototypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
