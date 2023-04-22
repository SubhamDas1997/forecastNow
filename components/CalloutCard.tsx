'use client'

import React from 'react';
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';

type props = {
    message: string,
    warning?: boolean
}

function CalloutCard({ message, warning }: props) {
  return (
    <Callout 
        className='mt-4'
        title={message}
        icon={warning ? ExclamationIcon : CheckCircleIcon}
        color={warning ? "amber" : "emerald"}
    />
  )
}

export default CalloutCard