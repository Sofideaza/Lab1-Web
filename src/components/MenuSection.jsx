import React from 'react'
import MenuCard from './MenuCard'
import { menuItems } from '../data'
import './MenuSection.css'

const MenuSection = () => {
  return (
    <section className="menu-section" id="menu">
      <h2>Nuestro Menú</h2>
      <div className="menu-container">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection