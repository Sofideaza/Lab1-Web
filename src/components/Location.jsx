import React from 'react'
import { locationInfo } from '../data'
import './Location.css'

const Location = () => {
  return (
    <section className="location" id="location">
      <h2>Ubicación y Horarios</h2>
      <div className="location-info">
        <p>{locationInfo.address}</p>
        <pre>{locationInfo.hours}</pre>
      </div>
    </section>
  )
}

export default Location