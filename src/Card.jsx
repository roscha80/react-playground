import * as React from 'react'
import './Card.css'

export default function Card(title, text, isBookmarked) {
  return (
    <section className="Card">
      <div className={isBookmarked ? 'Card bookmark' : 'Card'} />
      <p>{title}</p>
      <br />
      <p>{text}</p>
    </section>
  )
}
