import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

import './styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer-marca' >
        <div  >Fundación</div>
        <div style={{fontWeight: '700', fontSize: '1.3rem'}}>SION Emprender social</div>
      </div>
      {/* <div style={{fontSize: '0.81rem'}}>Copyright - Todos los derechos reservados</div> */}
      <div className='footer-item-cont'>
        <div className='footer-item'>
          <HomeIcon/>
          Cra 1C #23A-97 B/ La carolina  
        </div>
        
        <div className='footer-item'>
          <PhoneIcon/>
          602 735 84 40
        </div>
        
        <div className='footer-item'>
          <PhoneAndroidIcon/>
          +57 3135105135
        </div>
        
        <div className='footer-item'>
          <MailIcon/>
          sionemprendersocial@hotmail.com
        </div>
        
        <div className='footer-item'>
          <FmdGoodIcon />
          San Juan de Pasto
        </div>
      </div>
    </div>
  )
}

export { Footer }