import { getAllCreationIds, getCreationDataByID  } from '@/api/blog'
import {Layout} from '@/components/Layout'
import {NavigationInformations} from '@/components/creations/NavigationInformations'
import {Carrousel} from '@/components/creations/Carrousel'
import {Creation} from '@/interfaces/index'

type CreationProps = {
  creation: Creation
}

export default function Creations({creation}:CreationProps) {
    return (
    <Layout title="Clementinestla créations" metaName = "Créations" metaDescription="Description d'une création de Clementinestla avec details sur la fabrication & le prix">
          <div className=" flex flex-col w-full text-center gap-y-4 mt-20">
              <h1 className='text-3xl font-bold'>{creation.title}</h1>
              <div className='text-xl'>{creation.description}</div>
              <Carrousel imgs={creation.imgs}/>
              <div className='w-4/5 m-auto mt-8'>
              <NavigationInformations informations={creation.informations}/>
              </div>
        </div>
      </Layout>
    )
  }

export async function getStaticProps(params:any) {
    const creation = getCreationDataByID(params.params.id) 
    return {
      props: {
        creation
      }
    }
  }

export async function getStaticPaths() {
  const paths = getAllCreationIds()
  return {
    paths,
    fallback: false
  }
}
