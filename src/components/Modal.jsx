
import React from 'react'
import classes from './Modal.module.css'
function Modal({children, onCLoseModal}) {

  return (
    <>
    <div className={classes.backdrop} onClick={onCLoseModal}>
    {children}
    </div>
 
    </>

  )
}

export default Modal