'use client'

import { Card, Color, Metric, Text } from '@tremor/react';
import React from 'react';

type props = {
    title: string,
    metric: string,
    color?: Color
}

function StatCard({ title, metric, color }: props) {
  return (
    <Card decoration="top" decorationColor={color}>
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
    </Card>
  )
}

export default StatCard