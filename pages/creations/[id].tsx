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
      
      <Layout>
          <div className="flex flex-col w-full">
              <div>{creation.title}</div>
              <div>{creation.date}</div>
              <Carrousel imgs={creation.imgs}/>
              <div className='w-4/5 m-auto'>
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
