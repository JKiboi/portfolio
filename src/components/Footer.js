import React from 'react'
import "../styles/Footer.css"
import { Instagram,Twitter,Facebook,LinkedIn } from '@material-ui/icons'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
        <Instagram/>
        <Facebook/>
        <LinkedIn/>
        <Twitter/>
        <Facebook/>
      </div>
      <p>&copy; 2022 anythingtechke.com</p>
    </div>
  )
}

export default Footer
