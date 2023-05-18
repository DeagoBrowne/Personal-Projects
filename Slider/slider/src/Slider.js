import React, { useState } from 'react'

export default function Slider() {

  const [position, setPosition] = useState('left')

  const slidePosition = () => {
    return position === 'left'
      ? setPosition('right')
      : setPosition('left')
  }

  return (
    <div className='container'>
      <div className='slide-box'>
        <div className='slide-bar'></div>
        <div className={`slide-knob ${position}`}
          onClick={slidePosition} ></div>
      </div>
    </div>
  )
}