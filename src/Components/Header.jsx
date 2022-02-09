import React from 'react';
import 'animate.css';
import { NavLink, Link } from 'react-router-dom'
import HeaderMobile from './HeaderMobile';

const Header = () => {
  return( 
     <>
            <HeaderMobile />
            
            <div className="row header-desktop">
               <div className="col-md-2 col-sm-2 contenedor-header-left">
                    <div className='contenedor-logo'>
                    <Link to="/"><img src="" alt="logo-header" /></Link>  
                    </div>
               </div>

               <div className="col-md-10 col-sm-10 contenedor-header-right">
                   <div className='contenedor-menu'>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' activeClassName="active" to="/sobremi">SOBRE MÍ</NavLink> 
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="/portfolio">PORTFOLIO</NavLink>  
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="formacion">FORMACION</NavLink> 
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="cursos">ESTUDIOS / CURSOS </NavLink> 
                        </div>
                        <div className='menu-nav'>
                            <NavLink className='ancla-menu' to="contacto">CONTACTO</NavLink>
                        </div>
                   </div>
               </div>

            </div>
     </>
  )
};

export default Header;
