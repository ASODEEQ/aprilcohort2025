import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Layout = () => {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
        <div className='sidebar' style={{flexBasis: '30%', backgroundColor: 'orange'}}>
           {/* <a style={{color: 'red'}} href="/Home">Home</a> */}
           <Link to={'/'}>Home</Link> <br />
            {/* <a href="/About">About</a> */}
            <Link to={'/about'}>About</Link> <br />
            {/* <a href="#">Pricing</a> */}
            <Link to={'/contact'}>Contact</Link> <br />
           
        </div>
        <div style={{flexBasis: '70%'}}>
            
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout