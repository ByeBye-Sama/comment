import React, { Fragment, useState } from "react";

import { UserComment } from "../../../../components";
import createCommentMutation from '../../../../api/comment/createComment.mutation'
import allCommentsQuery from '../../../../api/comment/allComments.query'

import { FormComments, ButtonSubmit, TextAreaComments, FakeDiv } from './dashboard.style'

function DashboardContainer() {

  const { refetch } = allCommentsQuery();
  const createComment = createCommentMutation();
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    if (content != '') {
      e.preventDefault();
      createComment({ content: content })
      setContent('');
    }
  }

  const handleComment = (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <Fragment>
      {/*  <div>
        <button onClick={() => refetch()}>Start</button>
      </div> */}
      <UserComment />
      <FormComments onSubmit={handleSubmit} autoComplete="off">
        <TextAreaComments
          onKeyDown={handleComment}
          type="text" name='content'
          value={content}
          onChange={e => setContent(e.target.value)}
          rows="5" maxLength="150"
          required />
        <FakeDiv>
          <ButtonSubmit primary type="submit">
            Send
        </ButtonSubmit>
        </FakeDiv>
      </FormComments>

    </Fragment>
  )
}

export {
  DashboardContainer
}
