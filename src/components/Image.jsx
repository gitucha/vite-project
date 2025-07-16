import React from 'react'
import image from '../../public/images/phoenix.jpeg'

function Image() {

  return (

    <div>
        <img 
           src={image} 
           alt="Some phoenix image"
           style={{
            width: '400px',
            height: '400',
            borderRadius:'10px',
            border: '10px solid yellow'
           }} 
           />
    </div>
    
  )

}

export default Image