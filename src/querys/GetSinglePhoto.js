import { gql } from 'apollo-boost'

export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!){
    photo(id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
