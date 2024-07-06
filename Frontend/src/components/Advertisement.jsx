import React from 'react'
import advertisement from '../assets/publicidad fullstack.svg'

const Advertisement = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={advertisement} alt="publicidad" className="w-full"/>
    </div>
  )
}

export default Advertisement
