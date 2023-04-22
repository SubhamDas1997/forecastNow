'use client'

import React from 'react'
import { Card, AreaChart, Title } from "@tremor/react";

type props = {
    response: Root
}

function RainChart({ response }: props) {
    const hourlyResults = response?.hourly.time.map(time => 
        new Date(time).toLocaleTimeString("en-GB", {
            hour: 'numeric',
            hour12: false
        })
    ).slice(0,24);

    const data = hourlyResults.map((hour, i) => ({
        time: Number(hour),
        "Rain (%)": response.hourly.precipitation_probability[i],
    }))

    const tempFormatter = (number: number) => `${number} %`;
  
    return (
        <Card>
            <Title>Rain Probability</Title>

            <AreaChart 
                className='mt-6'
                data={data}
                showLegend
                index='time'
                categories={['Rain (%)']}
                colors={['blue']}
                minValue={0}
                maxValue={100}
                valueFormatter={tempFormatter}
                yAxisWidth={40}
            />
        </Card>
    )
}

export default RainChart