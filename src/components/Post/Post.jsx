import React, { useState, useEffect } from 'react';
import { imageDb } from '../../../firebase'; 
import { getDownloadURL, listAll, uploadBytes, ref } from 'firebase/storage';
import './Post.css';


const Post = ({ post }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        if (post.image) {
          const imageRef = ref(imageDb, post.image.toLowerCase());
          console.log('imageRef:', imageRef); // Log imageRef
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        }
      } catch (error) {
        console.error('Error getting image URL:', error);
      }
    };
    

    getImageUrl();
  }, [post.image]);

  return (
    <div>
      <div className='postContent'>
        <div className='ownerName'>{post.owner}</div>
        <div className='postDate'>{post.date}</div>
      </div>
      {imageUrl ? (
        <img className="imagePost" src={imageUrl} alt={post.title} />
      ) : (
        <div>Loading image...</div>
      )}
      <div className='postDescription'>{post.description}</div>
    </div>
  );
};

export default Post;
