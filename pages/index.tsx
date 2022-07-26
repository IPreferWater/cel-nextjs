import Link from 'next/link'
import Layout from '../components/Layout'


type IndexProps = {
  todo: string
}
  export default function IndexPage({ todo } : IndexProps) {


  return (<Layout title="index">
    <h1>Index</h1>
   
   {/* latest creations */}

   <div className='w-4/5 m-auto h-96 flex flex-col background-grid-green '>
    <div>logo new</div>
    <div className='flex flex-row'>
      <div className='bg-blue-300'>
        <img className='max-h-48' src='creations/kimono/c_2.webp'/>
        <h1>title</h1>
      </div>

      <div className='bg-blue-300 w-full'>
        <img className='max-h-48' src='creations/kimono/c_2.webp'/>
      </div>
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
