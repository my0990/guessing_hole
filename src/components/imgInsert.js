import { useState } from "react";
import styled from 'styled-components';


const Container = styled.div`
 width: 95vw;
 min-width: 1100px;
 min-height: 600px;
 height: 100%;
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
    display: inline-block; 
    padding: .5em .75em; 
    color: #999; 
    font-size: inherit; 
    line-height: normal; 
    vertical-align: middle; 
    background-color: #fdfdfd; 
    cursor: pointer; 
    border: 1px solid #ebebeb; 
    border-bottom-color: #e2e2e2; 
    border-radius: .25em;
   };
   label:hover{
    background-color: #454545;
   }
   input[type="file"]{
    position: absolute; 
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip:rect(0,0,0,0); 
    border: 0;
   };
 }
`

const ImgPreviewWrapper = styled.div`
 width: 80%;
//  background-color: red;
 display: flex;
 margin: auto;
 flex-wrap: wrap;
 justify-content: start;
 margin-top: 30px;
`

const ImgBox = styled.div`
  img{
    width: 280px;
    height: 280px;
    // background-color: blue;
    padding: 2.5px 5px;
  }
`

const ButtonStyle = styled.button`
    margin: 30px;
    width: 100px;
    height: 60px;
    border-radius: 10px;
`

const ImgInsert = ({myImage,onChange,setIsStarted}) => {


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
           id="input" 
           onChange={onChange}/>
        </div>
        <ImgPreviewWrapper>
          {myImage && (myImage.map((a,i)=>{
            return(
              <ImgBox>
              <img
                alt='sample'
                src={myImage[i]}
                style={{margin: "auto"}} />
              </ImgBox>
            )
          })
        )}
        </ImgPreviewWrapper>
        {myImage && <ButtonStyle onClick={()=>{setIsStarted(true)}}>시작하기</ButtonStyle>}
      </Container>
    );
  }


export default ImgInsert;