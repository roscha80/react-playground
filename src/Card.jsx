import * as React from 'react'
import Button from './Button'
import './Card.css'

export default function Card(isBookmarked) {
  return (
    <section className="Card">
      <div
        role="button"
        name="bookmark"
        className={isBookmarked ? 'Card bookmark' : 'Card'}
      />
      <h2>Überschrift</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo fugit
        asperiores perspiciatis porro explicabo quibusdam odit tempora atque
        ipsam magnam itaque consequuntur eaque excepturi sit vitae expedita
        omnis, blanditiis iure.
      </p>
    </section>
  )
}
