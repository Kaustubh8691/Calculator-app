import React from 'react'
import Output from './Output'

const OutputScreen = (props) => {
  return (
    <div className="screen">
    <Output value1 = {props.question} value2 = {props.answer}/>

  </div>
  )
}

export default OutputScreen