import React, { useState } from 'react';
import {IInformations} from '../../interfaces/index'
import {TabRealisation} from './TabRealisation'
import {TabStory} from './TabStory'


type CarrouselProps = {
    informations: IInformations
  }

export const Carrousel = ( {informations} : CarrouselProps) => {

    const [stateCarrousel, setSateCarrousel] = useState(0);

    const buttonHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const button: HTMLAnchorElement = event.currentTarget;
        //TODO
        setSateCarrousel(1);
      };

return <div>
    TODO carrousel
</div>
    }