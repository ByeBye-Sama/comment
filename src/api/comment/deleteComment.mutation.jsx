import { useMutation } from '@apollo/react-hooks';
import { DELETE_COMMENT, ALL_COMMENTS } from './comment.service'

export default () => {
  const [deleteComment] = useMutation(DELETE_COMMENT);

  return id => {
    return deleteComment({
      variables: { id },
      refetchQueries: [
        { query: ALL_COMMENTS }
      ]
      /*  notifyOnNetworkStatusChange: true,
       update: store => {
         const data = store.readQuery({
           query: ALL_COMMENTS,
         });
 
         store.writeQuery({
           query: ALL_COMMENTS,
           data: {
             comments: data.comments.filter(
               currentComment => currentComment.id !== id,
             ),
           },
         });
       }, */
    });
  };
};
