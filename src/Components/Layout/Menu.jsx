import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
       <nav>
           <ul>
               <li>
                   <Link to="/Home">Inicio</Link>
               </li>
               <li>
                   <Link to="/About">Sobre</Link>
               </li>
               <li>
                   <Link to="/Param/ Aqui estou passando um parametro, está ali em cima depois de do barra!">Parametro 2</Link>
               </li>
               <li>
                   <Link to="/Param/ Aqui é outro parametro!">Parametro 1</Link>
               </li>
               <li>
                   <Link to="/naoExiste">Não existe</Link>
               </li>
           </ul>
       </nav>
    </aside>
);

export default Menu;