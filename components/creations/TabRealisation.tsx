import React, { useState } from 'react';
import {IInformations, IRealisation, IStory} from '../../interfaces/index'
import {CasesInformations} from './CasesInformations'


type TabRealisationProps = {
  realisation: IRealisation
  }

export const TabRealisation = ( {realisation} : TabRealisationProps) => {



return <div className='flex flex-col space-y-4'>
    
    <CasesInformations title='Croquis schemas' casesInfo={realisation.sketchs}/>
    <CasesInformations title='Patronage découpe' casesInfo={realisation.patterns}/>
    <CasesInformations title='Couture finitions' casesInfo={realisation.sewings}/>

<h1 className='font-bold'>Cout</h1>
<div className='border-l pl-3 border-gray-300'>
<ul  className='flex flex-col'>
{realisation.costs.map((cost, i) => (
<li key={`cost-${i}`}>{cost}</li>
))}
</ul>
</div>

</div>
}


