import Link from 'next/link'
import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'


  export default function IndexPage() {


  return (<Layout title="Clementinestla cours couture Villeneuve d'ascq Lille" metaName = "Acceuil" metaDescription="Page d'acceuil de l'entreprise Clementinestla cours atelier de coutures sur Ascq">

    <div className='mb-4'>
   <Bandeau txt='Consommez autrement, upcyclez votre quotidien !'/>
   </div>
   

<div className='columns md:columns-2 gap-8 mr-4 space-y-8'>
   
      <div className='md:mx-24 text-xl flex flex-col items-center justify-center text-center space-y-5'>
        <h1 className='text-3xl font-bold mb-4 lg:mb-10'>Bienvenue</h1>
        <p>à l’atelier boutique qui propose de la couture et une mode éco-responsable !</p>
        <p>Ici vous pouvez prendre des cours, participer à un atelier, faire réaliser des réparations, des transformations de vêtements et vous pouvez trouver des créations uniques et originales ! </p>
      </div>

      <Link href={`/plannings`} className="bg-red-100 text-center  h-96 w-96 m-auto flex items-center justify-center text-3xl relative bg-reparations-100">
          <img className='object-fit' src='index/planning_background.webp' alt="photo link pour la page des plannings"/>
          <div className='bg-white absolute rounded-full w-64 h-64 opacity-90'></div>
          <p className='top-50 absolute underline decoration-cel-orange decoration-2'>Plannings</p>
      </Link>

      <img className='h-index-photo object-contain m-auto' src='index/landscape.webp' alt="Clémentine avec une création jupe verte"/>
    
      <img className=' h-index-photo object-contain m-auto' src='index/bag.webp' alt="Clémentine avec une création jupe rouge"/>

      <img className='h-index-photo object-contain m-auto' src='index/sewing_room.webp' alt="Atelier de couture de Clémentine"/>

      <Link href={`/tarifs`} className="text-center h-96 w-96 m-auto flex items-center justify-center text-3xl relative bg-reparations-100">      
          <img className='object-fit' src='index/reparation_background.webp' alt='link prix disponibles pour les retouches de coutures' />
          <div className='bg-white absolute rounded-full w-64 h-64 opacity-90'></div>
          <p className='top-50 absolute underline decoration-cel-orange decoration-2'>Réparations et transformations</p>
      </Link>
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
