
import React from 'react'
import './CityPage.css'
import { useInView } from 'react-intersection-observer';
import cities from '../../data/cities.json';
import Post from '../../components/Post/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CityPage(city) {


  // const [cities, setCities] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:3001/getCities')
  //     .then(cities => {
  //       setCities(cities.data)
  //     })
  //     .catch(err => console.log(err))
  // },[])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  const posts = cities.map(cityPost => {
    console.log("ghello")
    console.log(cityPost)
    console.log(city.city)
    if (cityPost === city.city) {

      return cityPost.posts.map((post, index) => <Post key={index} post={post} />);
    }
    return null;
  });
  return (
    <div>
      <div className="cityIntro">
        <h1 className={`cityNameTitle ${inView ? 'show' : ''}`} ref={ref}>
          {city.city.name}
        </h1>
        <h2 className={`cityHeader ${inView ? 'show' : ''}`} ref={ref}>
          {city.city.header}
        </h2>
      </div>
      <p className='description'>
      "
       {city.city.description} "
      </p>
      <h2 className='gallery'>Gallery</h2>
      <div className='posts'>
        {/* <h1>{ownerName}</h1> */}
        {posts}
      </div>


    </div>
  );

}

// CityPage.defaultProps = {
//   city: "Designer",
// };

export default CityPage