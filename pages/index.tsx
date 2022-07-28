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

   <div className='w-4/5 m-auto h-96 flex flex-col background-grid-green relative rounded-xl'>
    <img className='h-24 absolute -top-8 -left-8 object-scale-down' src='/icon_new.svg'/>
    <div className='flex flex-col sm:flex-row justify-around h-full items-center'>
    <LatestCard img='creations/kimono/c_2.webp' title='kimono' url='/creations/kimono'/>
    <LatestCard img='creations/kimono/c_2.webp' title='kimono' url='/creations/kimono'/>
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
