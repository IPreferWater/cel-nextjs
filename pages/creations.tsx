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
   <Bandeau txt='Blablabla les creations'/>

    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SingleCreation creationTitle="Kimono Unique" imgUrl="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/gigi_williams_366676_copier-taille1200_6202ada544ad4.jpg?itok=ThAuDQGk" price= {12}/>
    <SingleCreation creationTitle="béret anglais" imgUrl=''price={100}/>
    <SingleCreation creationTitle="chouchou" imgUrl=''price={300}/>

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