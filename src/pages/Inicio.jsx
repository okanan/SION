import React, { useState, useContext } from 'react'
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Link } from 'react-router-dom';
import {AppProvider, AppContext} from '../helpers/context'



import {blog} from '../helpers/blog'
// import AppContext from '../helpers/context'

import './styles/Inicio.scss'

const Inicio = (props) => {

  const {state, setState} = useContext(AppContext)

  const detalleBlog = (ele) => {

    setState({...state, postDetail: ele })

    console.log(state)
  }


  return (
    <div className='inicio-cont'>
      {blog.map((ele, index) => {

        if(ele.tipo === 'persona'){
          return(
            <div className='ele-persona' key={index}>
              <h1 className='title' style={{fontSize:'3rem'}} >{ele.titulo}</h1>
              <div className='persona-resumen_ev'>
                <p className='persona-resumen' >{ele.resumen}</p>
                <Link to={{ pathname: `/blog/${ele.titulo}` }}>
                  <ButtonUnstyled  
                    style={{width: '120px'}} 
                    className='confirmButton'
                    onClick = {() => detalleBlog(ele)}
                  >
                    Saber más
                  </ButtonUnstyled>
                </Link>
              </div>
              <img className='persona-imagen' src={ele.imagen} />
              
              
            </div>
          )
        }else return null
      })}
    </div>
  )
}

export { Inicio }