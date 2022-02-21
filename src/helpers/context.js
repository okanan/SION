import React, {createContext} from 'react'

const AppContext = React.createContext();

export const PROVIDER = AppContext.Provider()
export const CONSUMER = AppContext.Consumer()

export default AppContext;