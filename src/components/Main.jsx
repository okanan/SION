import React from 'react'

import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'

const Main = (props) => {
  return (
    <div>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  )
}

export { Main }