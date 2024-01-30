import React, { useEffect, useState } from 'react';
import { imageDb } from '../../../firebase';
import {v4} from 'uuid';
import {getDownloadURL, listAll, uploadBytes } from 'firebase/storage';
import { ref } from 'firebase/storage';


const ImageUpload = () => {
//  const [file, setFile] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (file) {
//       const storageRef = firebase.storage().ref(`uploads/${file.name}`);
//       const uploadTask = storageRef.put(file);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//           // Track upload progress
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setProgress(progress);
//         },
//         (error) => {
//           // Handle errors during upload
//           console.error(error.message);
//         },
//         () => {
//           // Handle successful upload
//           storageRef.getDownloadURL().then((url) => {
//             console.log('File available at:', url);
//           });
//         }
//       );
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <div>{progress}% Uploaded</div>
//     </div>
//   );
// };

        console.log("ImageUpload")
    const [img,setImg] =useState('')
    const [imgUrl,setImgUrl] =useState([])

    const handleClick = () =>{
     if(img !==null){
        const imgRef =  ref(imageDb,`files/${v4()}`)
        uploadBytes(imgRef,img).then(value=>{
            console.log(value, "handleClick")
            getDownloadURL(value.ref).then(url=>{
                setImgUrl(data=>[...data,url])
            })
        })
     }
    }

    useEffect(()=>{
        listAll(ref(imageDb,"files")).then(imgs=>{
            console.log(imgs, "useEffect")
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgUrl(data=>[...data,url])
                })
            })
        })
    },[])


    return(
        <div className="App">
                <input type="file" onChange={(e)=>setImg(e.target.files[0])} /> 
                <button onClick={handleClick}>Upload</button>
                <br/>
                {
                    imgUrl.map((dataVal,i)=><div key= {i}>
                        <img src={dataVal} height="200px" width="200px" />
                        <br/> 
                    </div>)
                }
        </div>
    )
}

export default ImageUpload;
