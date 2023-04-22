'use client'

import React from 'react';
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';

type props = {
    header: string,
    message: string,
    warning?: boolean,
}


function CalloutCard({ header, message, warning }: props) {
  return (
    <Callout 
        className='mt-4'
        title={header}
        icon={warning ? ExclamationIcon : CheckCircleIcon}
        color={warning ? "amber" : "emerald"}
    >
      {message}
    </Callout>
  )
}

export default CalloutCard