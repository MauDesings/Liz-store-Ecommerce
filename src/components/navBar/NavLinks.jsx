import { NavLink } from 'react-router-dom'

const NavLinks = ({handleOpen}) => {

  return (
    <>
      <li><NavLink className='link' to="/" onClick={handleOpen}>Inicio</NavLink></li>
      <li><NavLink className='link' to='/productos' onClick={handleOpen}>Productos</NavLink></li>
      <li><NavLink className='link' to='/contacto' onClick={handleOpen}>Contacto</NavLink></li>
    </>
  )
}

export default NavLinks
