import * as React from 'react'
import Button from './Button'
import './Card.css'

export default function Card({ title, text, isBookmarked }) {
  return (
    <section className="Card">
      <div
        role="button"
        name="bookmark"
        className={isBookmarked ? 'Card bookmark' : 'Card'}
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
