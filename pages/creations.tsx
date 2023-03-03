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
    const numbers = [1, 2, 3, 4, 5];
    
  return (<Layout title="Clementinestla créations"  metaName = "Page d'attente" metaDescription="Page regroupant toutes les créations upcyclés de Clementinestla">
   <Bandeau txt='Blablabla les creations'/>

    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {creations.map((creation) =>  <SingleCreation creationTitle={creation.title} imgUrl={creation.imgs[0]} price={0}/>)}
  </div>
  </div>
  </Layout>)

}

export async function getStaticProps(){
  const creations = await getAllCreationsSortedByDate()

  return {
      props: {
        creations
      }
  }
}