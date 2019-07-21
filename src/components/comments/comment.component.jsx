import React, { Fragment } from 'react';

import allCommentsQuery from '../../api/comment/allComments.query'
import deleteCommentMutation from '../../api/comment/deleteComment.mutation'
import { Button } from '../../ui';
import { CommentSection, CommentDiv, CommentContent, CommentName } from './comment.style';

function UserComment() {

  const { loading, data } = allCommentsQuery();
  const deleteComment = deleteCommentMutation();
  if (loading) return <p>comments loading...</p>;

  return (
    <Fragment>
      <CommentSection>
        {data.comments.map(comment => (
          <div key={comment.id}>
            <div key={comment.user.id}>
              <CommentName>{comment.user.name} says:</CommentName>

            </div>
            <CommentDiv>
              <CommentContent>{comment.content}</CommentContent>
              <Button onClick={() => deleteComment(comment.id)}>delete</Button>
            </CommentDiv>

          </div>
        )).reverse()}
      </CommentSection>
    </Fragment>
  )
}

export {
  UserComment
}
