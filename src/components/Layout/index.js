import React, { Fragment } from 'react'
import { Div, Title, Subtitle } from './styles'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <Helmet>
        { title && <title>{title} | Petgram</title> }
        { subtitle && <meta name='description' content={subtitle} /> }
      </Helmet>

      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}
