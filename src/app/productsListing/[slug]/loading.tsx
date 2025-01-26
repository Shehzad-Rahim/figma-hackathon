import React from 'react'
import { Loader } from 'lucide-react';

function loading() {
  return (

    <div className='flex justify-center items-center gap-3 h-screen'>
        <h2 className='text-2xl'>Loading Product Details</h2>
    <Loader className="animate-spin w-10 h-10"/>
    </div>
  )
}

export default loading