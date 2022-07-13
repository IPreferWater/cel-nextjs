

import { getAllCreationIds, getCreationDataByID  } from '../../pages/api/blog'
import Layout from '../../components/Layout'
import {Informations} from '../../components/creations/NavigationInformations'
import {Creation,IInformations} from '../../interfaces/index'

type CreationProps = {
  creation: Creation
}



export default function Creations({creation}:CreationProps) {

    console.log("from layout")
    console.log(creation)
    return (
      
      <Layout>
          <div className="flex flex-col w-full">
              <div>{creation.title}</div>
              <div>{creation.date}</div>
              <Informations informations={creation.informations}/>
        </div>
      </Layout>
    )
  }


export async function getStaticProps(params:any) {
    const creation = getCreationDataByID(params.params.id) 
    
    
    console.log(creation)
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
