// import styled from "styled-components";
// import { useState } from "react";
// import cat from "./cat.jpg";

// const Container = styled.div`
//     width: 100%;
//     min-width: 1100px;
//     height: 600px;
//     background-color: hotpink;
//     position: relative;
//     background-image: url(${cat})
// `
// const Black = styled.div`
//     width: 100%;
//     min-width: 1100px;
//     height: 600px;
//     background-color: black;
//     mix-blend-mode: hard-light;
// `

// const Mouse = styled.div`
//     border-radius: 100%;
//     background: gray;
//     position: absolute;
//     width: 8rem;
//     height: 8rem;
//     border: 2px solid green;
//     top: ${props => props.y}px;
//     left: ${props => props.x}px;
// `
// const PlayScreen = () => {
//     const [mouse,setMouse] = useState({x: 0, y: 0})
//     const onMouseMove = (e) => {
//         setMouse({x: e.clientX, y: e.clientY})
//     }
//     return(
//         <Container onMouseMove={onMouseMove}>
//             <Black>
//                 <Mouse x={mouse.x} y={mouse.y}/>
//                 {mouse.x}
//             </Black>
//         </Container>
//     )
// }

// export default PlayScreen;