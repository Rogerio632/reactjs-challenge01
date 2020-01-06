import React from 'react';
import Comment from './Comment';
import '../assets/css/Default.css';

function PostItem({ data }) {

  return (

    <div className="post">

      <div className="user-stats">
       <div className="user-info">
        <img src={data.author.avatar} className="user-avatar" />

        <div className="user-mashup">

        <span className="user-name">
          {data.author.name}
          </span>

          <span className="user-sinceDate">
          {data.date}
          </span>
        </div>

      </div>
      
      <div className="post-content">
        {data.content}
       </div>
      </div>
      <div className="division" />

      <div class="comments">
      { data.comments.map(comment => <Comment key={comment.id} data={comment} />) }
      </div>
    </div>

   

  );
}

PostItem.defaultProps = {
  data: 'ERROR 404 - POST NOT FOUND',
};

export default PostItem;