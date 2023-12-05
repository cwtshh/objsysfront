import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <nav id='nav'>
      <Link to='/'><img src={logo} /></Link>


      {/* <div className='login-as'>
        <p>Logar como:</p>  
      </div> */}
      <ul className='nav-links'>
        <li>
          <Link to='/student/login'>Aluno</Link>
        </li>

        <li>
          <Link to='/admin/login'>Professor ou monitor</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;