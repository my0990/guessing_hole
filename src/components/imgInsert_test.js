// import { useState } from "react";

// const ImgInsert = () => {
//     const [myImage,setMyImage] = useState('');
//     const onChange = (e) => {
      
//       const nowSelectImageList = e.target.files;
//       const nowImageURLList = [...myImage];
//       for(let i =0; i < nowSelectImageList.length; i += 1) {
//         const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
//         nowImageURLList.push(nowImageUrl);
//         console.log(e.target.files)
//       }
//       setMyImage(nowImageURLList);
//     }
  
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <input 
//             type='file' 
//             multiple='multiple'
//             accept='image/jpg, image/png, image/jpeg, image/gif'
//             name='profile_img'
//             onChange={onChange}>
//           </input>
//           <div>
//             {myImage && (myImage.map((a,i)=>{
             
//              return(
//                 <img
//                   alt='sample'
//                   src={myImage[i]}
//                   style={{margin: "auto"}} />
//               )
//             })
              
//             )}
//             {myImage[0]}
//           </div>
         
//         </header>
//       </div>
//     );
//   }


// export default ImgInsert;

