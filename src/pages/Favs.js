import React from 'react'
import { FavsWithQuery } from '../containers/FavsWithQuery'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
