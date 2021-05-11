import * as React from 'react'
import Button from './Button'
import './Pagination.css'

export default function Pagination({ currentPage, totalPages }) {
  return (
    <section className="Pagination">
      <Button isActive={currentPage !== 1}>Zurück</Button>
      {currentPage}/{totalPages}
      <Button isActive={currentPage !== totalPages}>Vor</Button>
    </section>
  )
}
