import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
      <div>
        <div>
          <NavLink>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink>
            Projects
          </NavLink>
        </div>
        <div>
          <NavLink>
            About
          </NavLink>
        </div>
      </div>

    </nav>
    </>
  )
}

export default Navbar