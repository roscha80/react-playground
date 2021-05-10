import * as React from 'react'
import Button from './Button'

import './Header.css'

export default ({ children, isBackButtonVisible }) => {
  return (
    <header className="Header">
      <Button hidden={!isBackButtonVisible} isActive>
        Zurück
      </Button>
      {children}
    </header>
  )
}
