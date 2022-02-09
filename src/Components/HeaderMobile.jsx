import React from 'react';
//import LogoVA from '../assets/logo-VA.png'
import MenuHamburger from './MenuHamburger';

const HeaderMobile = () => {
  return (
            <>
   
            <div className="row header-margin-bottom">
                <div className="col-md-12 col-sm-12 contenedor-header-mobile">
                     <div className='imagen-logo-mobile'>
                      {/*   <img src={LogoVA} alt="logo-va" /> */}
                     </div>

                     <MenuHamburger />
                </div>
            </div>


            </>
  )
};

export default HeaderMobile;