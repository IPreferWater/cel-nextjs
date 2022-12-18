import React from 'react'


type ItemProps = {
  // WARNING the title is used as a key, it need to be unique
  title?: string
  txts?: Array<string>
  img?: string
  }

export const Item = ( {title, txts, img} : ItemProps) => {


return <div className='flex flex-col gap-y-4'>
  {title!=null ? <h1 className='text-2xl font-bold'>{title}</h1>:null}
  {//render sentences if defined
txts!=null ? txts.map((str: string,i: number) => {
  return <p className='text-slate-700' key={i}>{str}</p>
}) : null
}
  {img!=null ? <img className='object-contain h-72' src={img}/>:null}
</div>
}
