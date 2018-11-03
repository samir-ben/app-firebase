import React from 'react';
import PostSummary from './PostSummary'

const PostList = ({posts}) => {
  return (
    <div className="project-list section">
      {posts && posts.map(post =>{
          return <PostSummary key={post.id} post={post} />
      })}
    </div>
  )
}

export default PostList;