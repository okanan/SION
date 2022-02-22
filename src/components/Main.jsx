import React, {useState} from 'react'

import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'

import {AppProvider, AppContext} from '../helpers/context'

const Main = (props) => {  

  return (
    <div style={{margin: '0', padding: '0'}}>
      <AppProvider >
        <Navbar/>
        {props.children}
        <Footer/>
      </AppProvider>
    </div>
  )
}

export { Main }