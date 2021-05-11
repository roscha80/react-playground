import * as React from 'react'
import Pagination from './Pagination'
import Header from './Header'
import Card from './Card'

const cards = [
  {
    title: 'Is this the end?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: false,
    id: 1,
  },
  {
    title: 'The question is what is the question?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: true,
    id: 2,
  },
  {
    title: 'Oh, really?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: false,
    id: 3,
  },
]

export default function App() {
  return (
    <div className="App">
      <Header isBackButtonVisible>Header with Button</Header>
      {cards.map(({ id, title, text, isBookmarked }) => (
        <Card key={id} title={title} text={text} isBookmarked={isBookmarked} />
      ))}
      <Pagination currentPage={1} totalPages={34} />
      <Pagination currentPage={2} totalPages={34} />
      <Pagination currentPage={34} totalPages={34} />
    </div>
  )
}
