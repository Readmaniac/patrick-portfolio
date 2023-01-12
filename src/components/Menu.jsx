import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      {/* className={({ isActive }) => (isActive ? 'activeLink' : 'link')} */}
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
  )
}

export default Menu
