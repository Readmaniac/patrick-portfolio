import { NavLink } from 'react-router-dom'
import Profile from './Profile/Profile'
import logo from '../../images/Moya_zastaka_777.svg'
import './Menu.css'

const Menu = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <img className="header__logo" src={logo} />
        <nav className="header__menu">
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            to="."
            end
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            About
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Contacts
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
          >
            Blog
          </NavLink>
        </nav>
      </div>
      <Profile />
    </header>
  )
}

export default Menu
