import React from 'react'
import './Post.css'


const sayHello = (post) => {
  console.log("Hello")
  console.log(post)
};
const Post = ({ post }) => {
  return (

    <div>
      {/* <div>{ sayHello(post)}</div> */}
      <div className='postContent'>

        <div className='ownerName'>{post.owner}</div>
        <div className='postDate'>{post.date}</div>

      </div>
      <img className="imagePost" src={post.image} alt={post.title} />
      {/* <h3>{post.title}</h3> */}
      <div className='postDescription'>{post.description}</div>

    </div>
  )
}

export default Post