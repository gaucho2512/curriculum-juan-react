import React from 'react';

import { Link } from 'react-router-dom'


const SeccionSobreMi = () => {
  return (
      <>
        <div className="row">
            <div className="col-md-6 col-sm-6 contenedor-seccion-sobre-mi-left">
                <div className='seccion-sobre-mi-left'>
                    <h2>SOBRE MÍ</h2>
                    <p>Soy diseñadora UI con buen conocimiento de Diseño en 
                        Comunicación Visual, me dedico a crear visualmente la interfaz 
                        de diferentes productos digitales.</p>
                    <p> Tengo facilidad y muy buena predisposición para aprender el uso 
                        de nuevas herramientas y metodologías que se requieran para
                        alcanzar mis objetivos así como optimizar los procesos que me
                        lleven a cumplir con las metas propuestas.</p>  
                    <p> Valoro el trabajo en equipo y la cooperación colectiva para la 
                        búsqueda y obtención de los mejores resultados en cada proyecto, 
                        y por eso tengo la convicción que trabajar en ambientes con buen 
                        clima laboral hacen armonioso y agradable practicar esta profesión
                        que tanto aprecio y es parte de mi vida.</p>
                </div>
            </div>

            <div className="col-md-6 col-sm-6 contenedor-seccion-sobre-mi-right">
                <div className='seccion-sobre-mi-right'>
                   <h1>HOLA</h1>
                </div>
            </div>
        </div>
      </>
  )
};

export default SeccionSobreMi;
