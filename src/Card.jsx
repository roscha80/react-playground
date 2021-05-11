import * as React from 'react'
import Button from './Button'
import './Card.css'

export default function Card({ title, text, isBookmarked }) {
  return (
    <section className="Card">
      <button
        name="bookmark"
        className={
          isBookmarked ? 'Card bookmark Card bookmark--added' : 'Card bookmark'
        }
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
