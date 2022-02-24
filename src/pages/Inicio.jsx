import React, { useState, useContext } from 'react'
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Link } from 'react-router-dom';
import {AppProvider, AppContext} from '../helpers/context'

import Carousel from 'react-bootstrap/Carousel'

import {blog} from '../helpers/blog'
// import AppContext from '../helpers/context'

import './styles/Inicio.scss'

const Inicio = (props) => {

  const {state, setState} = useContext(AppContext)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const detalleBlog = (ele) => {

    setState({...state, postDetail: ele })

    console.log(state)
  }


  return (
    <div className='inicio-cont'>
      <div className='carousel-cont'  >
      <Carousel 
        // fade 
        // activeIndex={index} 
        // onSelect={handleSelect} 
        style={{width: '100%', paddingBottom: '0px', height: '100%'}} 
        nextLabel='' 
        prevLabel='' 
      >
  <Carousel.Item>
    <div
      className=" w-100 h-100 carouselImage"
      alt="item ayudar a los demas"
      style={{backgroundImage: `url(https://res.cloudinary.com/da6bzgewk/image/upload/c_scale,w_2000/v1645594585/pexels-rodnae-productions-6647037_uobroq.jpg)`}}
    />
    <Carousel.Caption>
      <h3>SION - Emprender social</h3>
      <p>Brindar ayudas a los mas necesitados es nuestra mayor Satisfacción.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div
      className=" w-100 h-100 carouselImage"
      
      
      alt="Second slide"
      style={{backgroundImage: `url(https://res.cloudinary.com/da6bzgewk/image/upload/c_scale,w_2000/v1645594401/pexels-alena-darmel-7742824_zvefmh.jpg)`}}
    />

    <Carousel.Caption>
      <h3>Tecnología al servicio de los demás.</h3>
      <p>Promovemos el uso adecuado de las nuevas tecnologías de la información, para una mejor calidad y mantenimiento  educativo de las mismas.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div
      className=" w-100 h-100 carouselImage"
      src="https://res.cloudinary.com/da6bzgewk/image/upload/c_scale,w_2000/v1645594394/pexels-shvets-production-7176325_icbv0t.jpg"
      alt="Third slide"
      style={{backgroundImage: `url(https://res.cloudinary.com/da6bzgewk/image/upload/c_scale,w_2000/v1645594394/pexels-shvets-production-7176325_icbv0t.jpg)`}}
    />

    <Carousel.Caption>
      <h3>Pensamos en tu salud mental</h3>
      <p>Promovemos la salud mental como base frente a los cambios de comportamientos de cada persona.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

      {blog.map((ele, index) => {

        if(ele.tipo === 'persona'){
          return(
            <div className='ele-persona' key={index}>
              <div className='persona-resumen_ev'>
              <h2 className='title' style={{fontSize:'3rem'}} >{ele.titulo}</h2>
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