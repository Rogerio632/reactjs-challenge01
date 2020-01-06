import React from 'react';
import '../assets/css/Default.css';

function PostItem({ data }){

  return(
  
    <div className="post">
    { data.author.name }
    { data.author.avatar}
    { data.date }
    { data.content }
    </div>
    
  );
}

PostItem.defaultProps ={
 data: 'Post does not exists',
};

export default PostItem;