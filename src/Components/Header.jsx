import React from 'react';
import 'animate.css';
import { NavLink, Link } from 'react-router-dom'
import HeaderMobile from './HeaderMobile';
import LogoHeader from '../Assets/logo-juan-2.png'


const Header = () => {
  return( 
     <>
            <HeaderMobile />
            
            <div className="row header-desktop">
               <div className="col-md-3 col-sm-3 contenedor-header-left">
                    <div className='contenedor-logo'>
                     <Link to="/"><img src={LogoHeader} alt="logo-header" /></Link>   
                    </div>
               </div>

               <div className="col-md-9 col-sm-9 contenedor-header-right">
                   <div className='contenedor-menu'>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' activeClassName="active" to="/sobremi">SOBRE MÍ</NavLink> 
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="/portfolio">PORTFOLIO</NavLink>  
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="/trabajo">EXPERIENCIA PROFESIONAL </NavLink> 
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="/contacto">CONTACTO</NavLink>
                        </div>
                   </div>
               </div>

            </div>
     </>
  )
};

export default Header;
