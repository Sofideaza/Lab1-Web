import React from 'react'
import './MenuCard.css'

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="price">{item.price}</span>
    </div>
  )
}

export default MenuCard