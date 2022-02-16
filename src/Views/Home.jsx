import React from 'react';
import 'animate.css';
import SeccionSobreMi from '../Components/SeccionSobreMi';
import SeccionTrabajo from '../Components/SeccionTrabajo';
import SeccionFormulario from '../Components/SeccionFormulario';
import { Link } from 'react-router-dom';
import FotoPerfil from '../Assets/foto-perfil-sola.jpeg'


const Home = () => {
  return (
      <>
          <div className="row row-home">
            <div className='contenedor-foto-perfil'>
                 <img src={FotoPerfil} alt="imagen-perfil" /> 
            </div>

            <div className="col-md-6 col-sm-6 contenedor-home-left">
                <div className='seccion-home-left animate__animated animate__bounceInLeft'>
                    <h2> JU<span>AN</span> <br /> ARIZ<span>TEGUI</span> </h2>
                </div>
            </div>

            <div className="col-md-6 col-sm-6 contenedor-home-right">
                <div className='seccion-home-right  animate__animated animate__bounceInRight'>
                 <h2> <span>Frontend De</span>veloper</h2>
                </div>
            </div>
            <div className='contenedor-btn-home'>
               <Link to="/contacto" className='btn-contactarme'>Contactarme</Link>   
            </div>
        </div>

       <SeccionSobreMi />
       <SeccionTrabajo />
       <SeccionFormulario />
        
      </>
  )
};

export default Home;
