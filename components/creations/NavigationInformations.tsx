import React, { useState } from 'react';
import {IInformations} from '../../interfaces/index'
import {TabRealisation} from './TabRealisation'
import {TabStory} from './TabStory'


type InformationsProps = {
    informations: IInformations
  }

export const NavigationInformations = ( {informations} : InformationsProps) => {

    const headers = [
      {id:"story", label :"Histoire"},
      {id:"realisation", label :"Réalisation"}]
    const [stateTab, setSateTab] = useState('story');

    const buttonHandler = (event: React.MouseEvent<HTMLAnchorElement>, idHeader: string) => {
        event.preventDefault();
        const button: HTMLAnchorElement = event.currentTarget;
        setSateTab(idHeader);
      };

return <div>
    {/*<ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 space-x-4">

  {headers.map((header, i) => (
  <li key={`HeaderInfo-${i}`} className="nav-item" role="presentation">
      <a href={`#tabs-${header.id}`} 
      //className={`${stateTab=={`#tabs-${header.id}-tab`} ? 'underline':''} hover:border-transparent hover:bg-gray-100 active`} id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"}
      className={`${stateTab==header.id ? 'underline decoration-orange-400 decoration-1':''}`}
    aria-selected="true" onClick={(e) => buttonHandler(e, header.id)}>{header.label}</a>
  </li>
))}
  </ul>*/}
  {/*<div>
    <div className={`${stateTab=="story" ? 'show active':'hidden' }`}>
    <TabStory story={informations.story}/>
    </div>
    <div className={`${stateTab=="realisation" ? 'show active':'hidden' }`}>
    <TabRealisation realisation={informations.realisation}/>
    </div>
  </div>*/}

<div>
  <h2 className='text-4xl font-bold my-2'>Histoire</h2>
    <TabStory story={informations.story}/>      
    <h2 className='text-4xl font-bold my-2'>Réalisation</h2>  
    <TabRealisation realisation={informations.realisation}/>    
  </div>
  
</div>
    }