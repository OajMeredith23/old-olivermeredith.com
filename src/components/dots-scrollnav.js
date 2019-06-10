// import React, {useState, useEffect} from 'react'
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
// import { color } from "../utils/colors"

// export default function Dots(props){

//     const [dots, setDots] = useState([]);
//     let links = []
//     let sects;

//     useEffect(() => { 
//         sects = document.querySelectorAll('section');
//         // console.log(sects)
//         sects.forEach(s => setDots(s) )
//         console.log(dots)
//     })
    

     
//     return(
//         <figure css={
//             css`
//                 ${props.styles}
//                 position: sticky; 
//                 top: 0;
//                 height: 50px;
//                 width: 20px;
//                 background-color: red;
//                 top: 10px;
//                 left: 10px;
//                 z-index: 20;
//             `
//         }>

//             {links.map((link, i) => {
//                 <div
//                     key={i}
//                     css={
//                         css`
//                             width: 10px;
//                             height: 10px;
//                             margin: 10px;
//                             background: pink;
//                         `
//                     }
//                 ></div>
//             })}

//         </figure>
//     )
// }