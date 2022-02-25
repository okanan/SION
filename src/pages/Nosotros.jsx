import { textAlign } from '@mui/system'
import React from 'react'

import { ItemDinamico } from '../components/ItemDinamico'

import './styles/Nosotros.scss'

const Nosotros = () => {

  const data = {
    valores: [
      {
        "titulo": "Compromiso",
        "background": "https://res.cloudinary.com/da6bzgewk/image/upload/v1627835053/oferta_ceio8l.jpg",
        "valor" : "Nos mueve un sentido  de solidaridad y compromiso hacia las comunidades mas vulnerables que lo necesiten, dando lo mejor y contribuir al mejoramiento y calidad de vida, como contribuir a la prosperidad  de la comunidad en la que viven."
      },
      {
        "titulo": "Integridad",
        "background": "https://res.cloudinary.com/da6bzgewk/image/upload/v1645403839/business-success-concept-on-wooden-table-top-view-hands-protecting-wooden-figures-of-people_oxguik.jpg",
        "valor" : "Somos transparentes y fiables en las relaciones con nuestros proyectos y donantes con las personas con las que trabajamos y con el resto de la sociedad. Administrando los recursos a nuestra disposición con eficiencia y prudencia, austeridad e integridad, para promover soluciones viables y duraderas que generen impacto, del que somos también responsables y hemos de dar cuenta."
      },
      {
        "titulo": "Excelencia",
        "background": "https://res.cloudinary.com/da6bzgewk/image/upload/v1620649909/background_reportes_jjqquq.jpg",
        "valor" : "Trabajamos con humanidad y con profesionalismo promoviendo formación continua de todos los que forman parte de la organización trabajando con responsabilidad, compromiso y sinergia luchando contra la pobreza extrema."
      },
      {
        "titulo": "Apertura",
        "background": "https://res.cloudinary.com/da6bzgewk/image/upload/v1620800253/inversiones_inversionistas_negocios_ha5guh.webp",
        "valor" : "Estamos abiertos a todos sin acepción de personas, valoramos y aprendemos continuamente de las formas de trabajo de otras organizaciones y fomentamos que haya colaboración y compromiso en todo lo que hacemos."
      },
      {
        "titulo": "Entrega",
        "background": "https://res.cloudinary.com/da6bzgewk/image/upload/v1645403915/tourists-go-up-the-hill-in-the-sunrise_xdtwec.jpg",
        "valor" : "Estamos comprometidos en servir a los demás, dando lo mejor individual y grupal de nuestro equipo de trabajo."
      }

    ]
  }

  return (
    <div className='nosotros_main'>
      <div style={{marginBottom: '120px'}}>
        <div>
          <p className='title myv'>Misión</p>
          <p className='parrafo' >Promover, crear programas para mantener y mejora la calidad de vida de los seres humanos contribuyendo con su educación y formación integral desde las costumbres y origen de cada región y país, promoviendo la creación de la pequeña y mediana empresa fortaleciendo el emprendimiento colaborativo como base fundamental para el desarrollo y sostenimiento de las personas.</p>

        </div>
        <div>
          <p className='title myv' style={{ textAlign: 'end'}} >Visión</p>
          <p className='parrafo' >Promover, crear programas para mantener y mejora la calidad de vida de los seres humanos contribuyendo con su educación y formación integral desde las costumbres y origen de cada región y país, promoviendo la creación de la pequeña y mediana empresa fortaleciendo el emprendimiento colaborativo como base fundamental para el desarrollo y sostenimiento de las personas.</p>

        </div>
      </div>
      <h1 className='title' style={{fontSize: '3rem'}} >Nuestros valores</h1>
      <p className='titleDetail' >Lo mejor de nosotros.</p>
      <ItemDinamico
        items={data.valores}

      />
    </div>

  )
}

export { Nosotros }
