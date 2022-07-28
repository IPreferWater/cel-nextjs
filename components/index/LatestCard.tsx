import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Layout from '@/components/Layout'


type LatestCardProps = {
    img: string
    title: string
    url: string
  }

export const LatestCard = ( {img, title, url} : LatestCardProps) => {

return     <Link href={url}>
  <a className='flex flex-row '>
  <div className='background-gray-green p-8 rounded-xl'>
    <img className='max-h-48' src={img}/>
    <h1 className='text-center font-marker text-cel-marker underline decoration-cel-orange decoration-2'>{title}</h1>
  </div>
  </a>
</Link>
  }