import * as React from 'react'
import Button from './Button'
import './Pagination.css'

export default ({ text, isLeftDisabled, isRightDisabled }) => {
  return (
    <section className="Pagination">
      <Button isActive={!isLeftDisabled}>Zurück</Button>
      {text}
      <Button isActive={!isRightDisabled}>Vor</Button>
    </section>
  )
}
