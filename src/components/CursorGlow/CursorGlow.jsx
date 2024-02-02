import React, {useRef} from 'react'
import "./CursorGlow.css"

const CursorGlow = () => {
    const cursorRef = useRef()


    onmousemove=(e)=>{
        console.log(e.clientX);
        // cursorRef.current.style.left = `${e.clientX-350}px`
        // cursorRef.current.style.top = `${e.clientY-350}px`
      }
  return (
    <div ref={cursorRef} className="cursor-highlight"></div>
    )
}

export default CursorGlow