'use client'

import React from 'react'
import { Card, AreaChart, Title } from "@tremor/react";

type props = {
    response: Root
}

function TempChart({ response }: props) {
    const hourlyResults = response?.hourly.time.map(time => 
        new Date(time).toLocaleTimeString("en-GB", {
            hour: 'numeric',
            hour12: false
        })
    ).slice(0,24);

    const data = hourlyResults.map((hour, i) => ({
        time: Number(hour),
        "Temperature (C)": response.hourly.temperature_2m[i],
        "UV Index": response.hourly.uv_index[i]
    }))

    const tempFormatter = (number: number) => `${number}`;
  
    return (
        <Card>
            <Title>Temperature and UV Index</Title>

            <AreaChart 
                className='mt-6'
                data={data}
                showLegend
                index='time'
                categories={['Temperature (C)', 'UV Index']}
                colors={['rose', 'purple']}
                minValue={0}
                valueFormatter={tempFormatter}
                yAxisWidth={40}
            />
        </Card>
    )
}

export default TempChart