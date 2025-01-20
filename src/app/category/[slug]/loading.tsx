import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center gap-3 h-screen'>
        <h2 className='text-2xl'>Data Fetching...</h2>
        <div className='w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-black'></div>
    </div>
  )
}

export default loading