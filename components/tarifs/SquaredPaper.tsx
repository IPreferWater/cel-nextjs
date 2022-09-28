import React from 'react';

type Price = {
  title: string,
  price: number
}

type SquaredPaperProps = {
  title: string
  rotateLeft: boolean
  priceTab?: Price[]
  sentences?: string[]
  }

  

export const SquaredPaper = ( {title,rotateLeft, priceTab, sentences} : SquaredPaperProps) => {

return   <div className='m-8 background-gray-green p-8 rounded-xl relative '>
  <div className={`w-24 h-12 bg-orange-400 absolute -top-6 left-1/2 -translate-x-11 opacity-80 ${rotateLeft?'rotate-6':'-rotate-6'}`}></div>
<h2 className='text-center text-3xl'>{title}</h2>
<div className='my-6 mx-2 flex flex-col space-y-6 text-xl'>

{//render tab if defined
priceTab!=null ? priceTab.map(({title, price}: Price) => {
         return <div key={title} className='flex flex-row justify-between'>
          <div>{title}</div>
          <div className='font-bold'>{price}€</div>
          </div>
      }) : null
}
{//render sentences if defined
sentences!=null ? sentences.map((sentence: string) => {
  return <p>{sentence}</p>
}) : null
}

{//render last sentence if defined
sentences!=null ? <p className='font-bold'>Devis sur place </p>:null
}



      </div>

</div>
}


 