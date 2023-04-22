import React from 'react'
import { getClient } from '@/apollo-client'
import fetchWeather from '@/graphql/queries/fetchWeather'
import CalloutCard from '@/components/CalloutCard'
import StatCard from '@/components/StatCard'
import InfoPanel from '@/components/InfoPanel'
import TempChart from '@/components/TempChart'
import RainChart from '@/components/RainChart'
import HumidityChart from '@/components/HumidityChart'

type props = {
    params: {
        city: string,
        lat: string,
        long: string
    }
}

async function weatherReport({ params: {city, lat, long }}: props) {
  const client = getClient();
  
  const { data } = await client.query({
    query: fetchWeather,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "GMT"
    }
  });

  const response: Root = data.myQuery;
  console.log(response);

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InfoPanel city={city} lat={lat} long={long} response={response}/>

      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-5'>
          <div className='pb-5 ml-3'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last updated at: {""}
              {new Date(response.current_weather.time).toLocaleString()} ({response.timezone})
            </p>
          </div>
        
          <div className='m-2 mb-10'>
            <CalloutCard 
              message='This where GPT 4 message will go'
            />
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <StatCard 
              title='Maximum temperature' 
              metric={`${response.daily.temperature_2m_max[0].toFixed(1)}°`} 
              color='red' 
            />
            
            <StatCard 
              title='Mimimum temperature' 
              metric={`${response.daily.temperature_2m_min[0].toFixed(1)}°`} 
              color='teal' 
            />

            <div>
              <StatCard 
                title='UV Index' 
                metric={response.daily.uv_index_max[0].toFixed(1)} color='violet' 
              />

              {Number(response.daily.uv_index_max[0].toFixed(1)) >= 5 && (
                <CalloutCard 
                  message='Be sure to protect yourself from the high UV today!' 
                  warning 
                />
              )}
            </div>

            <div className='flex space-x-5'>
              <StatCard 
                title='Wind Speed'
                metric={response.current_weather.windspeed.toFixed(1)}
                color='pink'
              />

              <StatCard 
                title='Wind Direction'
                metric={response.current_weather.winddirection.toFixed(1)}
                color='blue'
              />
            </div>
          </div>
        </div>
        
        <hr className='mb-5' />

        <div className='space-y-3'>
          <TempChart response={response} />
          <RainChart response={response} />
          <HumidityChart response={response} />
        </div>
      </div>
    </div>
  )
}

export default weatherReport