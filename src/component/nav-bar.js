import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = (props)=>{
  return(
    <div>
      <ul className="nav">
  <li className="navItem"><Link to="/">Home</Link></li>
  <li className="navItem"><Link to="/login">Login</Link></li>
  <li className="navItem"><Link to="/about">About</Link></li>
  <li className="navItem"><Link to="/">Home</Link></li>
</ul>
    </div>
  )
}

export default NavBar;
