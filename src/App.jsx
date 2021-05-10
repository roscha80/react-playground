import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'

export default () => {
  return
  ;<div>
    <Header isBackButtonVisible>Header with Button</Header>
    <Header>Another Header</Header>
    <Pagination isLeftDisabled text="1/34" />
    <Pagination text="2/34" />
    <Pagination isRightDisabled text="34/34" />
    <Button isActive>Active</Button>
    <Button isActive>Not active</Button>
  </div>
}
