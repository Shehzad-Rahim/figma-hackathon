'use client'
import React, { useEffect } from 'react'

function Error({error}: {error:Error}) {
    useEffect(()=>{

    },[error])
  return (
    <div className='flex justify-center items-center '>
        <h1 className="text-2xl my-10">Fail to Fetch Data From Server</h1>
    </div>
  )
}

export default Error