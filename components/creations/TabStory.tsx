import React, { useState } from 'react';
import {IInformations, IStory} from '../../interfaces/index'


type TabStoryProps = {
  story: IStory
  }

export const TabStory = ( {story} : TabStoryProps) => {



return <div className='flex flex-col space-y-4'>
    
    <h1>Origine des tissus</h1>
{story.origins.map((origin, i) => (
  <div key={`origin-${i}`} className='flex flex-row items-center space-x-4 '>
    <img src={origin.img}/>
    <div>{origin.txt}</div>
  </div>
))}

<h1>Fun fact</h1>
<div className='flex flex-row items-center space-x-4 '>
    <img src={story.funfact.img}/>
    <div>{story.funfact.txt}</div>
  </div>
</div>

}


