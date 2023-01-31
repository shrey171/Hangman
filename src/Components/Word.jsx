import React, { useEffect, useRef } from 'react'
import Letter from './Letter'

export default function Word({word, display}) {
  const myRef = useRef(null);
  useEffect(()=>{
    const letters = myRef.current.querySelectorAll("div");
    for (const i of display) {      
      console.log(display);
      letters[i].innerHTML = word[i];
    }
  }, [display])
  return (
    <div className='flex justify-center my-10' ref = {myRef}>
      {word.map(()=> <Letter letter={'?'}/>)}
    </div>
  )
}
