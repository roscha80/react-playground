import * as React from 'react'
import Button from './Button'
import './Pagination.css'

export default function Pagination({ currentPage, totalPages }) {
  return (
    <section className="Pagination">
      <Button isActive={currentPage !== 1}>&lt;</Button>
      {currentPage}/{totalPages}
      <Button isActive={currentPage !== totalPages}>&gt;</Button>
    </section>
  )
}
