import React from 'react';
//import LogoFooter from '../assets/logo-va-footer.png'
//import LogoWhatsapp from '../assets/logo-whatsapp.png'
//import LogoEmail from '../assets/logo-email.png'
//import LogoLinkedin from '../assets/logo-linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <>
        <div className="row footer-mobile">
            <div className="col-md-4 col-sm-4 contenedor-logo-footer">
                <div className='logo-footer'>
                  {/*  <Link to="/"><img src={LogoFooter} alt="logo-footer" /></Link>  */}
                </div>
            </div>

            <div className="col-md-8 col-sm-8 contenedor-logos-redes-sociales">
                <div className='logos-redes-sociales-fila-1'>
                    <div className="logos-footer">
                      {/*   <a href="https://api.whatsapp.com/send?phone=+542214404997" target="_blank"><img src={LogoWhatsapp} alt="logo-whatsapp" /></a>   */}
                    </div>
                    <div className="logos-footer">
                     {/*    <a className='logo-linkedin' href="https://www.linkedin.com/in/arizteguivictoria/" target="_blank"><img src={LogoLinkedin} alt="logo-linkedin" /></a>  */}
                    </div>
                    <div className="logos-footer">
                      {/*   <a className='logo-email' href="mailto:arizteguivictoria@gmail.com?subject=" target="_blank"> <img src={LogoEmail} alt="logo-email" /> </a> */}
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default Footer;
