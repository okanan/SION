import React, {createContext, useState, useEffect} from 'react'

import {blog} from './blog'

const AppContext = createContext();

function AppProvider (props) {

  const [pestana, setPestana] = useState('inicio')

  const [state, setState] = useState({
    posts: blog,
    postDetail: {}
  })

  useEffect(() => {

    setState({...state, postDetail: {}})
    
  }, [pestana])
  

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        pestana,
        setPestana
      }}
    >
      {props.children}

    </AppContext.Provider>
  )


}


export {AppProvider, AppContext};