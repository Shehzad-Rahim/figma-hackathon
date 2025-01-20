import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center h-[70vh]'>
        <div className='w-12 h-12 rounded-full border-b-2 border-t-2 border-black animate-spin'></div>
    </div>
  )
}

export default Loading