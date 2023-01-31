import React from 'react'

export default function Message({message, classes}) {
  return (
    <h1 className={'text-center text-4xl font-extrabold ' + classes}>{message}</h1> 
    // 
  )
}
