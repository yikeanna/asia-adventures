
import React from 'react'
import './CityPage.css'
import { useInView } from 'react-intersection-observer';
import Post from '../../components/Post/Post';


function CityPage({city}) {


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  return (
    <div>
      <div className="cityIntro">
        <h1 className={`cityNameTitle ${inView ? 'show' : ''}`} ref={ref}>
          {city.name}
        </h1>
        <h2 className={`cityHeader ${inView ? 'show' : ''}`} ref={ref}>
          {city.header}
        </h2>
      </div>
      <p className='description'>
      "
       {city.description} "
      </p>
      <h2 className='gallery'>Gallery</h2>
      <div className='posts'>
      {city.posts.map((post, index) => <Post key={index} post={post} />)}
      </div>


    </div>
  );

}



export default CityPage