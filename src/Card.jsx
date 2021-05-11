import * as React from 'react'
import './Card.css'

export default function Card({ title, text, isBookmarked, isVisible }) {
  const bookmarkClass = isBookmarked
    ? 'Card__bookmark Card__bookmark--added'
    : 'Card__bookmark'

  const answerClass = isVisible ? '' : 'hidden'
  console.log(answerClass)

  return (
    <section className="Card">
      <button className={bookmarkClass} aria-label="Bookmark card" />
      <h2 className="Card__title" aria-label="Question">
        {title}
      </h2>
      <p className={answerClass} aria-label="Answer">
        {text}
      </p>
    </section>
  )
}
