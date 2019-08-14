import { gql } from 'apollo-boost'

export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`
