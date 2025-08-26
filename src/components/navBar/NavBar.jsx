import './navBar.css'
import { CiMenuFries } from 'react-icons/ci'
import NavLinks from './NavLinks'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'
import useToggle from '../../hooks/useToggle'
import { RiCloseFill } from 'react-icons/ri'
import { useAuthContext } from '../../context/AuthContext'


const NavBar = () => {
    const {handleOpen,open} = useToggle();
    const {user,handleSignOut} = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className='nav container'>
            <CiMenuFries className='nav__open' onClick={handleOpen} />
            <span className='nav__logo'>LOGO</span>

            <div className={open ?'nav__modal-content opacity' : 'nav__modal-content'}>
                <ul className={open ? 'nav__ul open' : 'nav__ul'}>
                    <span className='nav__Liz-logo'>Liz Store</span>
                    <NavLinks handleOpen={handleOpen}/>
                    <RiCloseFill className='nav__close' onClick={handleOpen} />
                </ul>
            </div>

            <div className='nav__login-content-cart'>
                {
                    user ? (
                        <>
                            <button className='nav__sign-out' onClick={()=> handleSignOut(navigate)}>Cerrar seción</button>
                        </>
                    ): (
                        <NavLink to='/login' className='link'>Iniciar seción</NavLink>
                    )
                }
            
                <NavLink className='link' to='/cart'>
                    <CartWidget />
                </NavLink>
            </div>
        
        </div>
    )
}

export default NavBar
