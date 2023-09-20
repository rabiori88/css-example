import React from 'react'

export default function Avatar({image, name, isNew}) {
  return (
     <div className='avatar'>
        <img  
        className = 'photo' 
        src= {image}
         alt="nature" />
         {isNew ? <span className='new'> new </span> : null }
        
       
    </div>
  )
}
