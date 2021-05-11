import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './Header'
import Card from './Card'

export default () => {
  return (
    <div>
      <Header isBackButtonVisible>Header with Button</Header>
      <Header>Another Header</Header>
      <Card />
      <Card isBookmarked />
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="2/34" />
      <Pagination isRightDisabled text="34/34" />
    </div>
  )
}
