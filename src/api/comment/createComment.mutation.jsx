import { useMutation } from '@apollo/react-hooks';
import { CREATE_COMMENT, ALL_COMMENTS } from './comment.service'

export default () => {
  const [createComment] = useMutation(CREATE_COMMENT);

  return ({ content }) => {
    return createComment({
      variables: { content },
      refetchQueries: [
        {query: ALL_COMMENTS}
      ]
    });
  };
};
