import gql from 'graphql-tag';

const GET_COMMENT = gql`
  query($id: String!){
    comment(id: $id) {
      id
      content
    }
  }
`;

const ALL_COMMENTS = gql`
  query{
    comments {
      id
      content
      user{
        id
        name
      }
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation($id: ID!){
    deleteComment(
      id: $id
    )
  }
`

const CREATE_COMMENT = gql`
mutation($content: String!) {
  createComment(
    content: $content
    userId: "2"
  ){
    id
    content
    userId
  } 
}
`

export {
  GET_COMMENT,
  ALL_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT
}
