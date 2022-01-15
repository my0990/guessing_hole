import { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
 width: 100vw;
 min-width: 1100px;
 min-height: 600px;
 height: 100vh;
//  background-color: skyblue;
 margin: 0 auto;
 h1 {
   font-size: 3em;
   text-align: start;
   color: #454545;
   padding-left: 10%;
 };
 .input{

   label{
    display: inline-block; padding: .5em .75em; color: #999; font-size: inherit; line-height: normal; vertical-align: middle; background-color: #fdfdfd; cursor: pointer; border: 1px solid #ebebeb; border-bottom-color: #e2e2e2; border-radius: .25em;
   }
   input[type="file"]{
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip:rect(0,0,0,0); border: 0;
   }
 }
`

const ImgInsert = () => {

  
  
    return (
      <Container>
        <h1>게싱홀 게임</h1>
        <p>이미지를 추가한 후 시작 버튼을 누르세요</p>
        <div className="input">
          <label for="input">
            업로드
          </label>
          <input
           type={'file'}
           multiple
           accept="img/*"
           name="temp_img"
           id="input" />
        </div>
      </Container>
    );
  }


export default ImgInsert;