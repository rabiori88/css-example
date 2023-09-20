import React, { useState } from 'react'
import './AppXY.css'
export default function AppXY() {

  const [position, setPosition] = useState({x: 0, y: 0});

    const handleMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY})
    };

    return (

    
    <div onMouseMove={handleMove} className='container'>
        <div style={{transform: `translate(${position.x}px, ${position.y}px)`}} className='pointer'>

        </div>
    </div>
  )
}
