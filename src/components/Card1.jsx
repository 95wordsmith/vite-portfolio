import React from 'react'
import  './Card1.css'
function Card1(props) {
  const classes = 'card1 ' + props.className;
  return (
    <div className={classes}>
    {props.children}
  </div>
  )
}

export default Card1