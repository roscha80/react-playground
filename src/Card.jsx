import * as React from 'react'
import './Card.css'

export default function Card({ title, text, isBookmarked }) {
  const bookmarkClass = isBookmarked
    ? 'Card__bookmark Card__bookmark--added'
    : 'Card__bookmark'
  return (
    <section className="Card">
      <button className={bookmarkClass} aria-label="Bookmark card" />
      <h2 className="Card__title">{title}</h2>
      <p>{text}</p>
    </section>
  )
}
