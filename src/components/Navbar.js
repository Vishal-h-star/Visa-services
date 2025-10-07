import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
           <nav>
                <div className={navbar ? 'navbarContainer active' : 'navbarContainer'}>
                    <div className='navlogo' to="/" onClick={closeMobileMenu}>
                        NavIcon
                    </div>
                    <div className='mobile-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink className="nav-links" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink className="nav-links" to="/">
                                Services
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink className="nav-links" to="/">
                                About Us
                            </NavLink>
                        </li>
                        <li className='nav__item-btn'>
                            {button ? (
                                <NavLink className="nav__btn-link" to="/">
                                    <Button primary>CONTACT US</Button>
                                </NavLink>
                            ): (
                                <NavLink className="nav__btn-link" to="/sign-up">
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
           </nav> 
        </>
    )
}

export default Navbar
