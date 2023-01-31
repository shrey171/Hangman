import React from 'react'
import Key from './Key'

export default function Keyboard({handleKeyPress}) {
  const keys = [
    ['Q', 'W', 'E',  'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S',  'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C','V', 'B', 'N', 'M']
  ]
  return (
    <div className='w-9/12 mx-auto mt-5 keyboard'>
      {keys.map(row => {
        return <div className=''>
          {row.map(k => <Key char={k} handleKeyPress={handleKeyPress}/>)}
        </div>
      })}
    </div>
  )
}
