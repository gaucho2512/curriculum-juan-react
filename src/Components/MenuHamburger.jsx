import React , {useState} from 'react'
import * as FaIcons from 'react-icons/fa'  /* INSTALAR ICONS */  // yarn add react-icons
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'   /* INSTALAR ROUTER */ // npm install --save react-router-dom
import DataMenu from './DataMenu'



const MenuHamburger = () => {

    const [ sidebar , setSidebar] = useState(false)

    const showSidebar = () => setSidebar( !sidebar )


    return (
       <>
  
        <div className="navbar">
            <Link to="#" className="menu-bars" >
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
           <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {DataMenu.map((item , index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} >
                                <h3>{item.title}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>


      </>
    )
}

export default MenuHamburger
