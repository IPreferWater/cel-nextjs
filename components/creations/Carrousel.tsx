import React, { useState, useEffect } from 'react';
import {IInformations} from '../../interfaces/index'
import {TabRealisation} from './TabRealisation'
import {TabStory} from './TabStory'
import Layout from '@/components/Layout'


type CarrouselProps = {
    informations: IInformations
  }

export const Carrousel = ( {informations} : CarrouselProps) => {

    const [stateCarrousel, setSateCarrousel] = useState(0);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const imgs = ["/creations/kimono/c_1.webp","/creations/kimono/c_2.webp","/creations/kimono/c_3.webp","/creations/kimono/c_4.webp","/creations/kimono/c_5.webp","/creations/kimono/croquis_kimono_small.webp"]


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    if (typeof window !== "undefined") {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    return 0,0
  }

  /*function getMaxItemsToDisplay(width : number): number {
    //xs : smartphone
    if (width < 640) { return 5 } 
    //xs : md
    else if (width < 1024) { return 7 } 
    // max items to displays
    else return  9
  }*/

  function getImgsToShowOrdered(): string[]{

    const imgsToShow: string[] = [];

    //we want to show 5 images
    for (let i = -2; i<= 2; i++) {
      // if we are to near the start, show the last 
      let indexToPush = i + stateCarrousel
      if (indexToPush <0){indexToPush = imgs.length + indexToPush} 
      // if we reached the end, go back to the firsts
      else if (indexToPush>imgs.length-1){indexToPush = indexToPush - imgs.length}
      imgsToShow.push(imgs[indexToPush])
    }

return imgsToShow
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
      <div>
      <h2>Width: {windowSize.innerWidth}</h2>
      <h2>Height: {windowSize.innerHeight}</h2>
    </div>
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




{/* Bottom part*/}
<div className="w-full flex flex-row">
<button
  className="carousel-control-prev flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="prev"
  onClick={(e) => moveCarrousel(e, -1)}
>
  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span className="visually-hidden">{'<'}</span>
</button>
{
getImgsToShowOrdered().map((img, i) => (
  <div className={`${i == 2 ? "active":"opacity-50"} carousel-item  relative float-left w-full `}>
  <img src={img} className="block w-full max-h-20 object-contain"
  />
</div>
))}

<button
  className="carousel-control-next  flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="next"
  onClick={(e) => moveCarrousel(e, 1)}
>
  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
  <span className="visually-hidden">{'>'}</span>
</button>

</div>
</div>
    }