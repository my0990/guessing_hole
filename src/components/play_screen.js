import styled from 'styled-components';
import {useEffect, useState} from 'react';

const Container = styled.div`
    width: 100%;
    min-width: 1100px;
    height: 700px;
    position: relative;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;
    cursor: ${props =>props.isAnswerChecked ? "true" : "none"};
`
// const ImgBox = styled.div`
//   img{
//     width: 1100px;
//     height: 700px;
//   }
// `

const Black = styled.div`
    width: 100%;
    height: 700px;
    background-color: black;
    mix-blend-mode: hard-light;
    margin: 0 auto;
    
    
`
const Mouse = styled.div`
    border-radius: 100%;
    background: #454545;
    position: absolute;
    width: ${props => props.cursorSize}rem;
    height: ${props => props.cursorSize}rem;
    border: 2px solid green;
    top: ${props => props.y - props.cursorSize*7}px;
    left: ${props => props.x}px;
`
const PlayScreen = ({myImage}) => {
    const [cursorSize,setCursorSize] = useState(10);
    const [index,setIndex] = useState(0);  //현재 사진 번호
    const [mouse,setMouse] = useState({x: 0, y: 0});
    const onMouseMove = (e) => {
        setMouse({x: e.clientX, y: e.clientY})
    };
    const [isAnswerChecked,setIsAnswerChecked] = useState(false);
    const nextQuiz = () => {
        if(index === myImage.length-1){
            return alert("마지막 사진입니다")
        }
        setIndex(index + 1);
        setIsAnswerChecked(false);
    }
    const onKeyPress = (e) => {
        if(e.key == '+'){
            setCursorSize(cursorSize + 1)
        } else if(e.key == '-') {
            setCursorSize(cursorSize - 1)
        };
    }

    return(
        <div  onKeyPress={onKeyPress}>
        <Container  url={myImage[index]} onMouseMove={onMouseMove} isAnswerChecked={isAnswerChecked}>
            {isAnswerChecked?null:<Black tabIndex={0}>
                <Mouse x={mouse.x - 50} y={mouse.y -50} cursorSize={cursorSize}/>
            </Black>}
            
        {/* <Black></Black>
              <ImgBox>
              <img
                alt='sample'
                src={myImage[index]}
                style={{margin: "auto"}}></img>
                
              </ImgBox> */}
              
        </Container>
        <div style={{marginTop: '15px'}}>
            <button style={{cursor:'pointer'}} onClick={()=>{setIsAnswerChecked(true)}}>정답보기</button>
            <button style={{cursor:'pointer'}} onClick={()=>{nextQuiz()}}>다음문제</button>
            <div style={{position:'absolute', bottom:'5px',right:'5px'}}>+,-로 크기를 조정할수 있어요 {index+1}/{myImage.length}</div>
        </div>
        </div>
    )
}

export default PlayScreen