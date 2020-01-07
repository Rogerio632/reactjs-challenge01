import React from 'react';

function Comment({ data }){

  return(

   <div class="comment">

       <div className="user-info user-stats">
        <img src={data.author.avatar} className="user-avatar" />

        <span className="user-comment">
          {data.author.name}
          </span>
          <div className="comment-background">
        <span className="comment-content">
        {data.content}
        </span>
      </div>

      </div>
   </div>

/**
 * author
 * name
 * avatar
 * content
 */
  );

}

export default Comment;