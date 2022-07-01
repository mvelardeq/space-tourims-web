import { useState } from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {

  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  window.addEventListener('resize',()=>{
    if (window.innerWidth>=600) setMobileMenuActive(false)
  })

  const onShowMenu = ()=>{
    setMobileMenuActive(true)
  }
  const onCloseMenu = ()=>{
    setMobileMenuActive(false)
  }
  
  return (
    <>
        <nav className='nav'>
          <picture className="logo">
            <img src="./assets/shared/logo.svg" alt="" />
          </picture>
          <div className={`navList ${mobileMenuActive ? 'menuShow' : ''}`}>
            <NavLink 
              to="/" 
              onClick={onCloseMenu}
              className={({isActive}) => ((isActive) ? "activeLink" : "")}
            >
                <span>00</span> Home
            </NavLink>
            <NavLink 
              to="/destination"
              onClick={onCloseMenu}
              className={({isActive}) => ((isActive) ? "activeLink" : "")}
            >
                <span>01</span> Destination
            </NavLink>
            <NavLink 
              to="/crew" 
              onClick={onCloseMenu}
              className={({isActive}) => ((isActive) ? "activeLink" : "")}
            >
                <span>02</span> Crew
            </NavLink>
            <NavLink 
              to="/technology"
              onClick={onCloseMenu}
              className={({isActive}) => ((isActive) ? "activeLink" : "")}
            >
                <span>03</span> Technology
            </NavLink>
          </div>
          <img onClick={onShowMenu} className={`icon-hamburger ${mobileMenuActive ? 'd-none' : ''}`} src="./assets/shared/icon-hamburger.svg" alt="" />
          <img onClick={onCloseMenu} className={`icon-close ${mobileMenuActive ? '' : 'd-none'}`}  src="./assets/shared/icon-close.svg" alt="" />
        </nav>
    </>
  )
}
