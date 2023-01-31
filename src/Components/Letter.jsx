import React from 'react'

export default function Letter({letter}) {
  return (
    <div className='w-12 py-1 dark:text-violet-200 text-center mx-1 text-6xl font-bold border-b-8 border-violet-500'>{letter}</div>
  )
}
