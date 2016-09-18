import React from 'react'
import { Link } from 'react-router'
import 'styles/nav'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        <Link to='/team'>
          Team
        </Link>
      </div>
    )
  }
}

export default Nav;
