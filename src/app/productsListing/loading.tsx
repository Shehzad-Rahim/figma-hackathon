import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center gap-3 h-screen'>
        <h2 className='text-2xl'>Loading Products</h2>
        <div className='w-[30px] h-[30px] border-t-2 border-b-2 rounded-full animate-spin border-blue-500'></div>
    </div>
  )
}

export default loading