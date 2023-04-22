import React from 'react';
import { SunIcon } from '@heroicons/react/solid';

function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#2EB62C] to-[#B3D475]">
        <SunIcon 
            className='h-24 w-24 animate-bounce text-yellow'
            color='yellow'
        />

        <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
            Loading Weather Information...
        </h1>

        <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
            Generating AI summary of the weather there!
        </h2>
    </div>
  )
}

export default loading