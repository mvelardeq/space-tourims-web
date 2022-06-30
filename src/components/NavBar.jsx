import { useState } from 'react'
import {Link} from 'react-router-dom'

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
            <Link to="/" onClick={onCloseMenu}>Home</Link>
            <Link to="/destination" onClick={onCloseMenu}>Destination</Link>
            <Link to="/crew" onClick={onCloseMenu}>Crew</Link>
            <Link to="/technology" onClick={onCloseMenu}>Technology</Link>
          </div>
          <img onClick={onShowMenu} className={`icon-hamburger ${mobileMenuActive ? 'd-none' : ''}`} src="./assets/shared/icon-hamburger.svg" alt="" />
          <img onClick={onCloseMenu} className={`icon-close ${mobileMenuActive ? '' : 'd-none'}`}  src="./assets/shared/icon-close.svg" alt="" />
        </nav>
    </>
  )
}
