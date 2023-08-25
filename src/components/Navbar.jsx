import Cartwidget from "./Cartwidget";
import img from '../imagenes/ball.png'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
     <header>
      <nav className='nav'>
        <div className='logo'>
          <img src={img} alt="logo de la pagina" className='img-logo' />
        </div>
        <ul className='link'>
          <li>Inicio</li>
          
          <Menu >
            <MenuButton>
              Productos
            </MenuButton>
            <MenuList>
              <MenuItem>Celular</MenuItem>
              <MenuItem>Television</MenuItem>
              <MenuItem>Notebook</MenuItem>
              <MenuItem>Tablet</MenuItem>
            </MenuList>
          </Menu>
          
        </ul>

        <Cartwidget />
      </nav>

    </header>
    </div>
  );
};

export default Navbar;
