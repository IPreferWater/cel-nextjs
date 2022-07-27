import React, { useState, useEffect } from 'react';

import Layout from '@/components/Layout'


type LatestCardProps = {
    img: string
    title: string
  }

export const LatestCard = ( {img, title} : LatestCardProps) => {

return     <div className='flex flex-row '>
<div className='bg-blue-300 p-8'>
  <img className='max-h-48' src={img}/>
  <h1 className='text-center'>{title}</h1>
</div>
</div>
  }