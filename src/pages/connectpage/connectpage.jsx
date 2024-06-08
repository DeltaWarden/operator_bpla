import React from 'react'
import ParticlesComponent from '../../components/libraries/particles.jsx' 
import Connect from '../../components/modules/connect/connect.jsx'

const connectpage = () => {
  return (
    <>
    <ParticlesComponent />
    <div className="connect">
    <Connect />
    </div>
    
    </>
  )
}

export default connectpage