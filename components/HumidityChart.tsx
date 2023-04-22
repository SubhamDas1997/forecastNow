'use client'

import React from 'react'
import { Card, AreaChart, Title } from "@tremor/react";

type props = {
    response: Root
}

function HumidityChart({ response }: props) {
    const hourlyResults = response?.hourly.time.map(time => 
        new Date(time).toLocaleTimeString("en-GB", {
            hour: 'numeric',
            hour12: false
        })
    ).slice(0,24);

    const data = hourlyResults.map((hour, i) => ({
        time: Number(hour),
        "Humidity (%)": response.hourly.relativehumidity_2m[i],
    }))

    const tempFormatter = (number: number) => `${number} %`;
  
    return (
        <Card>
            <Title>Humidity</Title>

            <AreaChart 
                className='mt-6'
                data={data}
                showLegend
                index='time'
                categories={['Humidity (%)']}
                colors={['emerald']}
                minValue={0}
                valueFormatter={tempFormatter}
                yAxisWidth={40}
            />
        </Card>
    )
}

export default HumidityChart