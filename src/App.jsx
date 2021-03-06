import * as React from 'react'
import Pagination from './Pagination'
import Header from './Header'
import Card from './Card'

const tags = [tag1, tag2, tag3]

const cards = [
  {
    title: 'Is this the end?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: false,
    isVisible: true,
    id: 1,
    tag1: 'tag1',
    tag2: 'tag2',
  },
  {
    title: 'The question is what is the question?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: true,
    isVisible: false,
    id: 2,
    tag1: 'tag1',
  },
  {
    title: 'Oh, really?',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos fugiat, libero totam sapiente vel culpa quod qui consequuntur nemo, similique facere sequi itaque corrupti quisquam, aut tempore debitis. Magni, iusto.',
    isBookmarked: false,
    isVisible: true,
    id: 3,
    tag1: 'tag1',
    tag2: 'tag2',
    tag3: 'tag3',
  },
]

export default function App() {
  return (
    <div className="App">
      <Header isBackButtonVisible>Header with Button</Header>
      {cards.map(({ id, title, text, isBookmarked, isVisible, tags }) => (
        <Card
          key={id}
          title={title}
          text={text}
          isBookmarked={isBookmarked}
          isVisible={isVisible}
          tags={tags}
        />
      ))}
      <Pagination currentPage={1} totalPages={34} />
      <Pagination currentPage={2} totalPages={34} />
      <Pagination currentPage={34} totalPages={34} />
    </div>
  )
}
