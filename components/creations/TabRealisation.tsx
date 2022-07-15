import React, { useState } from 'react';
import {IInformations, IRealisation, IStory} from '../../interfaces/index'


type TabRealisationProps = {
  realisation: IRealisation
  }

export const TabRealisation = ( {realisation} : TabRealisationProps) => {



return <div className='flex flex-col space-y-4'>
    
<h1>Croquis schemas</h1>
{realisation.sketchs.map((sketch, i) => (
<div key={`sketch-${i}`} className='flex flex-row items-center space-x-4 '>
<img src={sketch.img}/>
<div>{sketch.txt}</div>
</div>
))}

<h1>Patronage découpe</h1>
{realisation.patterns.map((pattern, i) => (
<div key={`pattern-${i}`} className='flex flex-row items-center space-x-4 '>
<img src={pattern.img}/>
<div>{pattern.txt}</div>
</div>
))}

<h1>Couture finitions</h1>
{realisation.sewings.map((sewing, i) => (
<div key={`sewing-${i}`} className='flex flex-row items-center space-x-4 '>
<img src={sewing.img}/>
<div>{sewing.txt}</div>
</div>
))}

<h1>Cout</h1>
<ul  className='flex flex-col'>
{realisation.costs.map((cost, i) => (
<li key={`cost-${i}`}>{cost}</li>
))}
</ul>

</div>
}


