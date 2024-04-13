import React, { useEffect, useState } from 'react';
import { imageDb } from '../../../firebase';
import { v4 } from 'uuid';
import { getDownloadURL, listAll, uploadBytes, ref } from 'firebase/storage';


const ImageUpload = () => {

  console.log("ImageUpload")
  console.log(imageDb)
  const [img, setImg] = useState('')
  const [imgUrl, setImgUrl] = useState([])

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`)
      uploadBytes(imgRef, img).then(value => {
        console.log(value, "handleClick")
        getDownloadURL(value.ref).then(url => {
          setImgUrl(data => [...data, url])
        })
      })
    }
  }


  useEffect(() => {
    console.log("onload");
    listAll(ref(imageDb, "files")).then((imgs) => {
      console.log(imgs, "useEffect");
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);


  return (
    <div className="App">
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
      <br />
      {
        imgUrl.map((dataVal, i) => <div key={i}>
          <img src={dataVal} height="200px" width="200px" />
          <br />
        </div>)
      }
    </div>
  )
}

export default ImageUpload;
