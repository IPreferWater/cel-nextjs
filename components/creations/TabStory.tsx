import React, { useState } from 'react';
import {IStory} from '../../interfaces/index'
import {CasesInformations} from './CasesInformations'


type TabStoryProps = {
  story: IStory
  }

export const TabStory = ( {story} : TabStoryProps) => {



return <div className='flex flex-col space-y-4'>
    <CasesInformations title='Origine' casesInfo={story.origins}/>
</div>

}


