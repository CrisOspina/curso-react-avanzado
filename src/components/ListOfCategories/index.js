import React, { Fragment } from 'react'
import { useCategoriesData } from '../../hooks/useCategoriesData'
import { useShowOrFixedData } from '../../hooks/useShowOrFixedData'
import { List, Item } from './styles'
import { Loader } from '../../styles/loader'
import { Category } from '../Category'

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const { showFixed } = useShowOrFixedData()

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  if (loading) return <Loader size={60} />

  return (
    <Fragment>
      { renderList() }
      { showFixed && renderList(true) }
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
