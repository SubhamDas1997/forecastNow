'use client'

import React from 'react'
import { Card, AreaChart, Title } from "@tremor/react";

type props = {
    response: Root
}

function WindGustsChart({ response }: props) {
    const hourlyResults = response?.hourly.time.map(time => 
        new Date(time).toLocaleTimeString("en-GB", {
            hour: 'numeric',
            hour12: false
        })
    ).slice(0,24);

    const data = hourlyResults.map((hour, i) => ({
        time: Number(hour),
        "Wind Gusts (km/h)": response.hourly.windgusts_10m[i],
    }))

    const tempFormatter = (number: number) => `${number} km/h`;
  
    return (
        <Card>
            <Title>Wind Gusts</Title>

            <AreaChart 
                className='mt-6'
                data={data}
                showLegend
                index='time'
                categories={['Wind Gusts (km/h)']}
                colors={['stone']}
                minValue={0}
                valueFormatter={tempFormatter}
                yAxisWidth={35}
            />
        </Card>
    )
}

export default WindGustsChart