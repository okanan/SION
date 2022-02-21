import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './styles/Navbar.scss'


const Navbar = () => {

  const [pestana, setPestana] = useState('inicio')
  const [opciones, setOpciones] = useState([])

  const arrOpciones = [
    "Inicio",
    "Nosotros",
    "Blog"

  ]

  useEffect(() => {
    const navbar = arrOpciones.map((item) => {
      return cleanOpc(item) 
    })
    setOpciones(navbar)
    setPestana( pestana === '' && 'inicio' )
  }, [])
  



  const cleanOpc = (opc, idx) => {

    const opcToLowerCase = opc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    setPestana(opcToLowerCase)

    return opcToLowerCase

  }

  return (
    <div className='navbar'>
      <img style={{marginLeft: '20px'}} src='https://res.cloudinary.com/da6bzgewk/image/upload/v1645393152/LOGO_FUNDACION_SION_bqz0q2.jpg'></img>
      
      <div className='navbar-opc-cont'>
        {opciones.map( (opcion, index) => {
          return (
              <Link 
                key={index}
                className='navbar-opc-item' 
                to={{ pathname: pestana !== '' ?  `${opcion === 'Inicio' ? '' : opcion}` : '/'}}
                style={{
                  borderBottom: opcion === pestana && '5px solid #00B82E',
                  color: opcion === pestana && '#00B82E'
                }}
                onClick={() => cleanOpc(opcion, index)}
                >
                <div 
                >
                  {opcion}
                </div>
              </Link>
          )
        })}
      </div>
    </div> 
  )
}

export { Navbar }