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
      <Card
        title="My first Card"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto."
      />
      <Card
        isBookmarked
        title="My second Card"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto."
      />
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="2/34" />
      <Pagination isRightDisabled text="34/34" />
    </div>
  )
}
