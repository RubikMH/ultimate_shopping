import React from 'react'
import Post from '../Post'
import { css } from '@emotion/css'

const PostList = ({ posts }) => {
  return (
    <div
      className="w-full h-full flex mobile:flex-col tablet:flex-col flex-row  flex-wrap mx-auto justify-center  
    items-center justify-items-center p-8  

    "
    >
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  )
}

export default PostList
