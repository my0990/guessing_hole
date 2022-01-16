import {useState} from 'react';
import styled from 'styled-components';
import ImgInsert from './imgInsert';
import { Link } from "react-router-dom";
import PlayScreen from './play_screen';



const Home = () => {
    const [isStarted,setIsStarted] = useState(false);
    const [myImage,setMyImage] = useState('');
    const onChange = (e) => {
      const nowSelectImageList = e.target.files;
      const nowImageURLList = [...myImage];
      for(let i =0; i < nowSelectImageList.length; i += 1) {
        const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
        nowImageURLList.push(nowImageUrl);
        console.log(e.target.files)
      }
      setMyImage(nowImageURLList);
    }
    return(
        <div>
            {isStarted 
                ?<PlayScreen myImage={myImage}/> 
                : <ImgInsert myImage={myImage} onChange={onChange} setIsStarted={setIsStarted}/> }
        </div>
    )
}

export default Home;