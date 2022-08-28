import React from 'react'

const Button = (props) => {
 
  return (
    <input className='buttons' onClick = {props.handleClick}
      type="button"
      value={props.label}
    />
  )
}

export default Button