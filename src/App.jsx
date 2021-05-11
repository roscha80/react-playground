import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Header from './Header'
import Card from './Card'

export default function App() {
  return (
    <div className="App">
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
      <Pagination currenatPage={1} totalPages={34} />
      <Pagination currenatPage={2} totalPages={34} />
      <Pagination currenatPage={34} totalPages={34} />
    </div>
  )
}
