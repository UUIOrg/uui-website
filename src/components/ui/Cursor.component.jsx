import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Cursor = () => {

    const pointerRef = useRef(null);

    const [ { cursorX,cursorY },setCursor ] = useState({
        cursorX : 0,
        cursorY : 0
    })
    console.log(pointerRef)
    React.useEffect(() => {
        console.log(pointerRef)
        window.addEventListener('mousemove',eve => {
            //console.log(eve.pageX);
            //console.log(eve.pageY);
            setCursor({
                cursorX : eve.pageX,
                cursorY : eve.pageY
            })
        })
    },[cursorX,cursorY])
    return (
        <Pointer
        ref={pointerRef} 
        top={`${cursorY-10}px`}
        left={`${cursorX-10}px`}
        />
    )
}

export default Cursor

const Pointer =styled.div`
width : 20px;
height : 20px;
border-radius : 50%;
background : blue;
position : absolute;
z-index : 50000000;
top: ${props => props.top};
left: ${props => props.left};
transition : 0.3s all;
`