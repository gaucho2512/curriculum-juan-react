import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const SeccionFormulario = () => {


  const [ form , setform] = useState({
      nombre: '',
      email: '',
      mensaje: ''
  })

  const [ error , setError] = useState(false)

  const {nombre , email , mensaje} = form

  const inputChange = (e) => {
      setform({
          ...form , 
          [e.target.name] : e.target.value 
      })
  }

  const formSubmit = (e) => {
      e.preventDefault();

      if(nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
          setError(true) 
          return
       }

        setError(false)
     
      emailjs.sendForm('victoriaariztegui', 'ID-mensajes', e.target, 'user_ENISE6BFrKpwc6OKnpBJq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      setform({
        nombre: '',
        email: '',
        mensaje: ''
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Tu mensaje fue enviado con éxito!',
        showConfirmButton: false,
        timer: 2000
      })
  }




  return (
      <>
        <div className="row">
            <div className="col-md-12 div-sm-12 contenedor-formulario">
              <h3>¡Si te querés contactar conmigo dejame tu mensaje!</h3>
                <div className='box-white'>
                    <div className='box-pink'>
                        <form
                        onSubmit={formSubmit}>
                            <input
                             className='form-control input-nombre'
                             placeholder='Nombre'
                             type="text"
                             name='nombre'
                             onChange={inputChange}
                             value={nombre}
                             />
                            <input
                             className='form-control input-email'
                             placeholder='Email'
                             type="email"
                             name='email'
                             onChange={inputChange}
                             value={email}
                             />
                            <textarea
                             className='form-control text-area-mensaje'
                            placeholder='Mensaje'
                            name='mensaje'
                            onChange={inputChange}
                            value={mensaje}
                            >
                            </textarea>
                            <button
                             className='btn-formulario'
                             type='submit'
                             >Enviar mensaje</button>
                             { error ? <p className='btn-error'>*Todos los campos son obligatorios*</p> : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default SeccionFormulario;
