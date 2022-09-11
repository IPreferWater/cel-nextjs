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
    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 space-x-4">

  {headers.map((header, i) => (
  <li key={`HeaderInfo-${i}`} className="nav-item" role="presentation">
      <a href={`#tabs-${header.id}`} 
      //className={`${stateTab=={`#tabs-${header.id}-tab`} ? 'underline':''} hover:border-transparent hover:bg-gray-100 active`} id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"}
      className={`${stateTab==header.id ? 'underline decoration-orange-400 decoration-1':''}`}
    aria-selected="true" onClick={(e) => buttonHandler(e, header.id)}>{header.label}</a>
  </li>
))}

{/*<li >
  <a href="#tabs-home" className={`
    ${stateTab=="tabs-home-tab" ? 'underline':''} 
    hover:border-transparent hover:bg-gray-100
    active
    `} id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
    aria-selected="true" onClick={buttonHandler}>Histoire</a>
</li>
<li className="nav-item" role="presentation">
  <a href="#tabs-profile" className={`
    hover:border-transparent hover:bg-gray-100
    `} id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
    aria-controls="tabs-profile" aria-selected="false" onClick={buttonHandler}>Réalisation</a>
</li>*/}
</ul>
  <div>
    <div className={`${stateTab=="story" ? 'show active':'hidden' }`}>
    <TabStory story={informations.story}/>
    </div>
    <div className={`${stateTab=="realisation" ? 'show active':'hidden' }`}>
    <TabRealisation realisation={informations.realisation}/>
    </div>
  </div>
</div>
    }