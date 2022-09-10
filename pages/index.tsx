import Link from 'next/link'
import {Layout} from '../components/Layout'
import {LatestCard} from '@/components/index/LatestCard'
import {Bandeau} from '@/components/Bandeau'


type IndexProps = {
  todo: string
}
  export default function IndexPage({ todo } : IndexProps) {


  return (<Layout title="index">
    <div className='my-4'>
   <Bandeau txt='Consommez autrement, upcyclez votre quotidien !'/>
   </div>

<div className='columns md:columns-2 gap-8 mr-4 space-y-8'>
   
      <div className='md:mx-24 text-xl flex flex-col items-center justify-center text-center space-y-5'>
        <h1 className='text-3xl font-bold mb-4 lg:mb-10'>Bienvenue</h1>
        <p>à l’atelier boutique qui propose de la couture et une mode éco-responsable !</p>
        <p>Ici vous pouvez prendre des cours, participer à un atelier, faire réaliser des réparations, des transformations de vêtements et vous pouvez trouver des créations uniques et originales ! </p>
      </div>
      <div className='bg-yellow-400 p-20 text-center h-96 w-96 m-auto flex items-center justify-center text-3xl'>Planning du mois</div>
      <img className='h-index-photo object-contain m-auto' src='index/landscape.webp'/>
   

    
      <img className=' h-index-photo object-contain m-auto' src='index/bag.webp'/>
      <img className='h-index-photo object-contain m-auto' src='index/sewing_room.webp'/>
      <div className='bg-red-400 p-20 text-center  h-96 w-96 m-auto h-96 flex items-center justify-center text-3xl'>Réparations et transformations</div>

      </div>
      
      <div className='my-20'>
      <Bandeau txt='Lutter contre le gaspillage textile et la fast fashion c’est l’objectif à travers les services et créations proposées'/>
      </div>
   

    

   {/* latest creations  TODO put in another component

   <div className='w-4/5 m-auto h-96 flex flex-col background-grid-green relative rounded-xl'>
    <img className='h-24 absolute -top-8 -left-8 object-scale-down' src='/icon_new.svg'/>
    <div className='flex flex-col sm:flex-row justify-around h-full items-center'>
    <LatestCard img='creations/kimono/c_2.webp' title='kimono' url='/creations/kimono'/>
    <LatestCard img='creations/kimono/c_2.webp' title='kimono' url='/creations/kimono'/>
    </div>

    <div>link all creations</div>
     </div>
  */}
  
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
