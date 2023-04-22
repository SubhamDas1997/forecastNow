import React from 'react';
import Image from 'next/image';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import CitySelector from './CitySelector';
import weatherCodeToString from '@/lib/weatherCodeToString';

type props = {
    city: string,
    lat: string,
    long: string,
    response: Root
};

function InfoPanel({ city, lat, long, response}: props) {
  return (
    <div className='p-10 bg-gradient-to-br from-[#2EB62C] to-[#B3D475] text-white'>
        <div className='pb-5'>
            <h1 className='text-4xl md:text-6xl font-bold pb-4 text-center lg:text-left lg:max-w-lg'>{decodeURI(city)}</h1>
            <p className='text-lg text-white text-center lg:text-left'>Lattitude: {lat}</p>
            <p className='text-lg text-white text-center lg:text-left'>Longitude: {long}</p>
        </div>

        <CitySelector />

        <hr className='my-10'/>

        <div className='flex items-center justify-between mt-5 mb-5 space-x-10'>
            <div>
                <p className='text-xl'>
                    {new Date().toLocaleDateString("en-GB", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>

                <p className='font-extralight'>
                    Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </p>
            </div>

            <p className='text-xl font-bold uppercase'>
                {new Date().toLocaleTimeString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                })}
            </p>
        </div>

        <hr className='mt-10 mb-3'/>

        <div className='flex flex-col items-center justify-between'>
            <Image 
                src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[response.current_weather.weathercode].icon}.png`}
                alt={weatherCodeToString[response.current_weather.weathercode].label}
                width={75}
                height={75}
            />

            <p className='text-6xl font-semibold'>{response.current_weather.temperature.toFixed(1)}°C</p>

            <p className='text-xl text-center font-extralight pt-3'>{weatherCodeToString[response.current_weather.weathercode].label}</p>
        </div>

        <div className='space-y-3 pt-6'>
            <div className='flex items-center space-x-2 px-4 py-2 border border-[#98FB98] rounded-lg bg-[#3EB489]'>
                <SunIcon className='h-10 w-10 text-white' />

                <div className="flex-1 flex justify-between items-center">
                    <p className="font-light">Sunrise</p>
                    
                    <p className="text-2xl uppercase">
                        {new Date(response.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        })}
                    </p>
                </div>
            </div>

            <div className='flex items-center space-x-2 px-4 py-2 border border-[#98FB98] rounded-lg bg-[#3EB489]'>
                <MoonIcon className='h-10 w-10 text-white' />

                <div className="flex-1 flex justify-between items-center">
                    <p className="font-light">Sunset</p>
                    
                    <p className="text-2xl uppercase">
                        {new Date(response.daily.sunset[0]).toLocaleTimeString("en-GB", {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        })}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoPanel