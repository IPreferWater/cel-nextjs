import { Bandeau } from '@/components/Bandeau'
import { SingleCreation } from '@/components/creations/SingleCreation'
import {Layout} from '../components/Layout'
import { Creation } from '../interfaces'
//import {Bandeau} from '@/components/Bandeau'
import {getAllCreationsSortedByDate} from "./api/blog"

type CreationsPageProps = {
  creations: Array<Creation>
}

  export default function CreationsPage({creations} : CreationsPageProps) {

  return (<Layout title="Clementinestla créations"  metaName = "Page d'attente" metaDescription="Page regroupant toutes les créations upcyclés de Clementinestla">
   <Bandeau txt='Créations upcylées'/>

    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20 mx-12'>

    <SingleCreation creationTitle="Veste Kimono Kuzco" imgUrl="/creations/kimono/c_1.webp" url="/creations/kimono" price= {12}/>
    <SingleCreation creationTitle="Jupe droite Coco" imgUrl='/creations/jujitsu-trou-pantalon/c_1.webp'  url="/creations/kimono"price={100}/>
    <SingleCreation creationTitle="Short/ caleçon Parrot" imgUrl='/creations/kimono/c_1.webp'  url="/creations/kimono"price={300}/>

  </div>
  </div>
  </Layout>)

}

export async function getStaticProps(){
  const allCreations = await getAllCreationsSortedByDate()
  console.log(allCreations)
  return {
      props: {
        allCreations
      }
  }
}