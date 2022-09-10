import React from 'react';

type BandeauProps = {
  txt: string
  }

export const Bandeau = ( {txt} : BandeauProps) => {

return <div className='w-full text-3xl p-8 bg-cel-green text-center'>{txt}</div>
}


