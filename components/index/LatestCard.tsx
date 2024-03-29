import React from 'react';
import Link from 'next/link'


type LatestCardProps = {
    img: string
    title: string
    url: string
  }

export const LatestCard = ( {img, title, url} : LatestCardProps) => {

return     <Link href={url} className='flex flex-row'>
  <div className='background-gray-green p-8 rounded-xl'>
    <img className='max-h-48' src={img}/>
    <h1 className='text-center font-marker text-cel-marker underline decoration-cel-orange decoration-2'>{title}</h1>
  </div>
</Link>
  }