import React, { useEffect, useRef } from 'react'

export default function Stickman ({counter}) {
  useEffect(()=>{
    document.getElementById(counter).classList.add('visible');
  }, [counter])
  return (
    <div className='w-[300px] flex flex-wrap mx-auto mt-10'>
        <div className='line horizontal-line w-[51.5%] mx-auto'></div>
        <div className='flex items-center flex-col w-6/12'>
            <div className='line vertical-line h-[300px]'></div>
            <div className='line horizontal-line w-full'></div>
        </div>
        <div className='flex flex-col items-center w-6/12'>
            <div id='0' className='line vertical-line h-12'></div>
            <div className='stickman-body w-full flex flex-col items-center invisible'>
                <div id='1' className='stick-head stick-limb'></div>
                <div id='2' className='line vertical-line stick-body'></div>
                <div id='3' className='line horizontal-line stick-limb stick-lh'></div>
                <div id='4' className='line horizontal-line stick-limb stick-rh'></div>
                <div id='5' className='line horizontal-line stick-limb stick-ll'></div>
                <div id='6' className='line horizontal-line stick-limb stick-rl'></div>
            </div>
        </div>
    </div>
  )
}
