import React from 'react';
import 'animate.css';
import SeccionSobreMi from '../Components/SeccionSobreMi';
import SeccionTrabajo from '../Components/SeccionTrabajo';
import SeccionFormulario from '../Components/SeccionFormulario';


const Home = () => {
  return (
      <>
       <SeccionSobreMi />
       <SeccionTrabajo />
       <SeccionFormulario />
        
      </>
  )
};

export default Home;
