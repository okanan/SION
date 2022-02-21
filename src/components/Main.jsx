import React, {useState} from 'react'

import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'

import AppContext from '../helpers/context'

const Main = (props) => {

  const { PROVIDER } = AppContext

  const [state, setState] = useState({
    posts: [],
    postDetail: {}
  })

  return (
    <div style={{margin: '0', padding: '0'}}>
      <PROVIDER value={state}>
        <Navbar/>
        {props.children}
        <Footer/>
      </PROVIDER>
    </div>
  )
}

export { Main }