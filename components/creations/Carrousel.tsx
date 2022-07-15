import React, { useState } from 'react';
import {IInformations} from '../../interfaces/index'
import {TabRealisation} from './TabRealisation'
import {TabStory} from './TabStory'


type CarrouselProps = {
    informations: IInformations
  }

export const Carrousel = ( {informations} : CarrouselProps) => {

    const [stateCarrousel, setSateCarrousel] = useState(0);

    const imgs = ["/creations/kimono/c_1.webp","/creations/kimono/c_2.webp","/creations/kimono/c_3.webp","/creations/kimono/c_4.webp","/creations/kimono/c_5.webp"
  ]
    function mooveSlide(){

    }
    const moveCarrousel = (event: React.MouseEvent<HTMLButtonElement>, i: number) => {
        event.preventDefault();
        const newStateCarrousel = stateCarrousel +i

        if (newStateCarrousel>imgs.length-1){
          setSateCarrousel(0);
          return
        }

        if (newStateCarrousel<0) {
          setSateCarrousel(imgs.length-1);
          return
        }

        setSateCarrousel(newStateCarrousel);
      };

return <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
<div className="carousel-inner relative w-full overflow-hidden">

{imgs.map((img, i) => (
  <div className={`${stateCarrousel == i ? "active":"hidden"} carousel-item  relative float-left w-full `}>
  <img
    src={img}
    className="block w-full max-h-96 object-contain"
    alt="Wild Landscape"
  />
</div>
))}

</div>
<button
  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="prev"
  onClick={(e) => moveCarrousel(e, -1)}
>
  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button
  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="next"
  onClick={(e) => moveCarrousel(e, 1)}
>
  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
    }