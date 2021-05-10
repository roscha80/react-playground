import * as React from 'react'
import Button from './Button'
import './Pagination.css'
import PaginationText from './PaginationText'

export default ({ text, isLeftDisabled, isRightDisabled }) => {
  return (
    <section className="Pagination">
      <Button className={isLeftDisabled ? '' : 'active'}>Zurück</Button>
      {text}
      <Button className={isRightDisabled ? '' : 'active'}>Vor</Button>
    </section>
  )
}
