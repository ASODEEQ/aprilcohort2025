import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
        {/* <img src={logo} alt="" srcSet="" /> */}
        <h1 style={{color:'red'}}>MIxlr</h1>
        </div>
        <div className='nav-links'>
            {/* <a style={{color: 'red'}} href="/Home">Home</a> */}
            <Link to={'/'}>Home</Link> <br />
            {/* <a href="/About">About</a> */}
            <Link to={'/about'}>About</Link> <br />
            {/* <a href="#">Pricing</a> */}
            <Link to={'/contact'}>Contact</Link> <br />

            {/* <a href="#">Login</a> */}

            
        </div>
    </div>
  )
}

export default Navbar