import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import './styles/Inicio.scss'

import {blog} from '../helpers/blog'

const Inicio = () => {


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
                  <Button style={{width: '120px'}} variant="contained" color="primary" size="small" >Saber más</Button>
                </Link>
              </div>
              <img className='persona-imagen' src={ele.imagen} />
              
              
            </div>
          )
        }else return(
          <div key={index}>
           es otro tipo 
          </div>
        )
      })}
    </div>
  )
}

export { Inicio }