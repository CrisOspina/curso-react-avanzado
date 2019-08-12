import { gql } from 'apollo-boost'

export const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`
