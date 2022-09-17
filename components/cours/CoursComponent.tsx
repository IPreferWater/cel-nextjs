import React, { ReactNode } from 'react'
import 'tailwindcss/tailwind.css'

type CoursProps = {
  titles: string[],
  children: ReactNode
}

export const CoursComponent = ({ titles, children}: CoursProps) => {
  return <div className='flex flex-col md:flex-row md:space-x-6 items-stretch justify-center m-6'>
  <div className='background-grid-green text-4xl text-center w-full md:w-1/2 flex flex-col justify-center items-center'>
    {titles.map((title: string) => {
  return <p key={title} className='m-6'>{title}</p>
}) 
}
  </div>
  
  {children}
  
</div>
}
