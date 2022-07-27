import Link from 'next/link'
import Layout from '../components/Layout'
import {LatestCard} from '@/components/index/LatestCard'


type IndexProps = {
  todo: string
}
  export default function IndexPage({ todo } : IndexProps) {


  return (<Layout title="index">
    <h1>Index</h1>
   
   {/* latest creations */}

   <div className='w-4/5 m-auto h-96 flex flex-col background-grid-green '>
    <div>logo new</div>
    <div className='flex flex-row justify-around'>
    <LatestCard img='creations/kimono/c_2.webp' title='title_1'/>
    <LatestCard img='creations/kimono/c_2.webp' title='title_2'/>
    </div>

    <div>link all creations</div>

   </div>
  </Layout>)
}

export async function getStaticProps() {
 /* const posts = getSortedPostsData() as Post[]
  return {
    props: {
      posts
    }
  }*/
  return {
    props : {
      todo:"todo"
    }
  }
}
