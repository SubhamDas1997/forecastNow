import React from 'react'
import { getClient } from '@/apollo-client'
import fetchWeather from '@/graphql/queries/fetchWeather'
import CalloutCard from '@/components/CalloutCard'
import StatCard from '@/components/StatCard'
import InfoPanel from '@/components/InfoPanel'
import TempChart from '@/components/TempChart'
import RainChart from '@/components/RainChart'
import HumidityChart from '@/components/HumidityChart'
import getBasePath from '@/lib/getBasePath'
import cleanData from '@/lib/cleanData'
import WindGustsChart from '@/components/WindGustsChart'

export const revalidate = 300;

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
      timezone: "auto"
    }
  });

  const response: Root = data.myQuery;
  const dataToGPT = cleanData(response, city);

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({weatherData: dataToGPT})
  })

  const GPTData = await res.json();
  const { content } = GPTData;

  return (
    <div className='flex flex-col min-h-screen lg:flex-row'>
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
            <CalloutCard header='Weather Report' message={content} />
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2 text'>
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

            <StatCard 
              title='UV Index' 
              metric={response.daily.uv_index_max[0].toFixed(1)} color='violet' 
            />

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

          <div className='mx-2'>
            {Number(response.daily.uv_index_max[0].toFixed(1)) >= 8 && (
                <CalloutCard
                  header='High UV Index'
                  message='Be sure to protect yourself from the high UV today!' 
                  warning 
                />
            )}
          </div>
        </div>
        
        <hr className='mb-5' />

        <div className='space-y-3'>
          <TempChart response={response} />
          <RainChart response={response} />
          <HumidityChart response={response} />
          <WindGustsChart response={response} />
        </div>
      </div>
    </div>
  )
}

export default weatherReport