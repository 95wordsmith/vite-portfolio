// import React from 'react'
// import classes from './Navbar.module.css'
// import { Link } from 'react-router-dom'
// import NavIcons from './NavIcons'

// function Navbar() {
//   return (
//     <div className={classes.main}>
//       <NavIcons/>
//       <nav className={classes.container}>
//         <Link  to="/">HOME</Link>
//         <Link  to="/Portfolio">PORTFOLIO</Link>
//       </nav>

//     </div>
 
//   )
// }

// export default Navbar
import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import NavIcons from './NavIcons';

function Navbar() {
  return (
    <div className={classes.main}>
      <NavIcons />
      <nav className={classes.container}>
        <NavLink 
         to="/" >
          HOME
        </NavLink>
        <NavLink  to="/portfolio" >
          PORTFOLIO
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
