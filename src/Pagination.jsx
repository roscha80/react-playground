import * as React from 'react'
import Button from './Button'
import './Pagination.css'

export default function Pagination({ text, isLeftDisabled, isRightDisabled }) {
  return (
    <section className="Pagination">
      <Button isActive={!isLeftDisabled}>Zurück</Button>
      {text}
      <Button isActive={!isRightDisabled}>Vor</Button>
    </section>
  )
}
