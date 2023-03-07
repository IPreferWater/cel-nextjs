import { Bandeau } from '@/components/Bandeau'
import { SingleCreation } from '@/components/creations/SingleCreation'
import {Layout} from '../components/Layout'
import { Creation } from '../interfaces'
import {getAllCreationsSortedByDate} from "./api/blog"

type CreationsPageProps = {
  creations: Array<Creation>
}

  export default function CreationsPage({creations} : CreationsPageProps) {
    
  return (<Layout title="Clementinestla créations"  metaName = "Page d'attente" metaDescription="Page regroupant toutes les créations upcyclés de Clementinestla">
   <Bandeau txt='Créations upcylées'/>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
      {creations.map((creation) =>  <SingleCreation creationTitle={creation.title} url={`/creations/${creation.id}`} imgUrl={creation.imgs[0]} price={0}/>)}
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