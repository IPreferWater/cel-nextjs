

import { getAllCreationIds, getCreationDataByID  } from '../../pages/api/blog'
import Layout from '../../components/Layout'
import AvroConverter from '../../components/blog/AvroConverter';
import TailwindV3 from '../../components/blog/TailwindV3';
import ListWowStyle from '../../components/list-wow-style/ListWowStyle';
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import {unified} from 'unified'
import {Creation} from '../../interfaces/index'

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
