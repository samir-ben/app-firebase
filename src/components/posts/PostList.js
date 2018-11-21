import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const PostList = (props) => {

    return (
      <div className="project-list section">
        {props.posts && props.posts.map(post =>{
            return (
              <Link key={post.id} to={'/posts/' + post.id}>
                <PostSummary post={post} />
              </Link>
            )
        })}
      </div>
    )

}



export default (PostList);