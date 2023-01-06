import React from 'react';
import {ICaseInformation} from '../../interfaces/index'


type CaseInformationProps = {
  // WARNING the title is used as a key, it need to be unique
  title: string
  casesInfo: Array<ICaseInformation>
  }

export const CasesInformations = ( {title,casesInfo} : CaseInformationProps) => {

return <div>
      <h1 className='font-bold'>{title}</h1>
    <div className='border-l pl-3 border-gray-300'>
{casesInfo.map((origin, i) => (
  <div key={`${title}-${i}`} className='flex flex-row items-center space-x-4 my-4'>
    <img src={origin.img}/>
    <div>{origin.txt}</div>
  </div>
))}
</div>
</div>
}


