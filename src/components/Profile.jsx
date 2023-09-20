import React from 'react'

export default function Profile({image, name, job, isNew}) {
  return (
    <div className='profile'>
        <img  
        className = 'photo' 
        src= {image}
         alt="nature" />
         {isNew ? <span className='new'> new </span> : null }
        
        <h1> {name}</h1>
        <p> {job}</p>
    </div>
  )
}




