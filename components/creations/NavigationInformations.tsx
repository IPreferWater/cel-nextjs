import React, { useState } from 'react';
import {IInformations} from '../../interfaces/index'
import {TabRealisation} from './TabRealisation'
import {TabStory} from './TabStory'


type InformationsProps = {
    informations: IInformations
  }

export const NavigationInformations = ( {informations} : InformationsProps) => {

    const [stateTab, setSateTab] = useState('tabs-home-tab');

    const buttonHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const button: HTMLAnchorElement = event.currentTarget;
        setSateTab(button.id);
      };

return <div>
    <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
role="tablist">
<li className="nav-item" role="presentation">
  <a href="#tabs-home" className="
  text-red-400
    nav-link
    block
    font-medium
    text-xs
    leading-tight
    uppercase
    border-x-0 border-t-0 border-b-2 border-transparent
    px-6
    py-3
    my-2
    hover:border-transparent hover:bg-gray-100
    focus:border-transparent
    active
  " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
    aria-selected="true" onClick={buttonHandler}>Histoire</a>
</li>
<li className="nav-item" role="presentation">
  <a href="#tabs-profile" className="
    nav-link
    block
    font-medium
    text-xs
    leading-tight
    uppercase
    border-x-0 border-t-0 border-b-2 border-transparent
    px-6
    py-3
    my-2
    hover:border-transparent hover:bg-gray-100
    focus:border-transparent
  " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
    aria-controls="tabs-profile" aria-selected="false" onClick={buttonHandler}>Réalisation</a>
</li>
</ul>
  <div className="tab-content" id="tabs-tabContent">
    <div className={`tab-pane fade ${stateTab=="tabs-home-tab" ? 'show active':'hidden' }`} id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
    <TabStory story={informations.story}/>
    </div>
    <div className={`tab-pane fade ${stateTab=="tabs-profile-tab" ? 'show active':'hidden' }`} id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
    <TabRealisation realisation={informations.realisation}/>
    </div>
  </div>
</div>
    }