import React from 'react'
import  './Card2.css'
function Card2(props) {
  const classes = 'card2 ' + props.className;
  return (
    <div className={classes}>
    {props.children}
  </div>
  )
}

export default Card2