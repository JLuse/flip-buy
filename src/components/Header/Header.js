import React from 'react';
// import {NavLink, Link} from 'react-router-dom';
import './header.css'



const Header = (props) => {
  console.log(props)
  return (
    <div className="header">
      <nav className="nav">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              {/* <Logo /> compontent */}
              Logo
            </a>
          </div>
        </div>
        <div className="link-container">
          <div className="sign-in">
            {/* <NavLink to="/sign-in"><Signin /></NavLink> */}
            {props.isLogin ? 'Logout' : 'Sign-in'}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;