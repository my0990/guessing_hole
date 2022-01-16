import styled from 'styled-components';
import {useState} from 'react';

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
    cursor: none;
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
    width: 10rem;
    height: 10rem;
    border: 2px solid green;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
`
const PlayScreen = ({myImage}) => {
    const [index,setIndex] = useState(0);
    const [mouse,setMouse] = useState({x: 0, y: 0});
    const onMouseMove = (e) => {
        setMouse({x: e.clientX, y: e.clientY})
    };
    const [isAnswerChecked,setIsAnswerChecked] = useState(false);
    const nextQuiz = () => {
        setIndex(index + 1);
        setIsAnswerChecked(false);
    }
    return(
        <div>
        <Container url={myImage[index]} onMouseMove={onMouseMove}>
            {isAnswerChecked?null:<Black>
                <Mouse x={mouse.x - 50} y={mouse.y -50}/>
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
            <button onClick={()=>{setIsAnswerChecked(true)}}>정답보기</button>
            <button onClick={()=>{nextQuiz()}}>다음문제</button>
        </div>
        </div>
    )
}

export default PlayScreen