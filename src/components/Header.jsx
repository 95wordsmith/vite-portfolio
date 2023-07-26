import React, {useState} from 'react'
import Navbar from './Navbar'
import classes from './Header.module.css'
function Header() {
   const [name, setName]= useState('')
   const [isSubmitted, setIsSubmitted]= useState(false)

   const handleButtonClick = () => {
    const enteredName = window.prompt('Please enter your name:');
    if (enteredName) {
      setName(enteredName);
      setIsSubmitted(true);
    }
  };
  return (
    <header className={classes.header}>
    {/* <Navbar/> */}
    <div className={classes.entername}>
      {!isSubmitted ? (
        <div>
          <h1 className={classes.head}>Hi!</h1>
          <button className={classes.button}  onClick={handleButtonClick}>Please Enter Your Name</button>
        </div>
      ) : (
        <div>
          <h1 className={classes.welcome}>Welcome, {name}!</h1>
        </div>
      )}
    </div>
    </header>
    
  )
}

export default Header