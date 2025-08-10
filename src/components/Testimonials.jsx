import React from 'react'
import { testimonials } from '../data'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p>"{testimonial.text}"</p>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials