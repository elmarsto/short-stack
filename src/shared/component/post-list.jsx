// @flow

import React from 'react'

type Props = {
  data: Object,
}

const PostList = (props: Props) =>
  <div>{JSON.stringify(props.data)}</div>


export default PostList
