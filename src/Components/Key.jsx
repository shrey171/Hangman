import React, { useEffect, useState } from 'react'

export default function Key({char, handleKeyPress}) {
  const [disable, setDisable] = useState(false);
  
  return (
    <button key={char} 
    disabled={disable}
    onClick = {()=> {setDisable(handleKeyPress(char))}}
    className={'key ' + (disable ? 'disabled' : '')}>
        {char}
    </button>
  )
}
