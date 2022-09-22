import {Layout} from '../components/Layout'
import Link from 'next/link'
import {Bandeau} from '@/components/Bandeau'
import {getAllPlannings} from "./api/planning"
import {IPlanningTitle} from '@/interfaces/index'

type PlanningsPageProps = {
  planningTitles: Array<IPlanningTitle>
}



  export default function Plannings({planningTitles} : PlanningsPageProps) {

  return (<Layout title="Plannings">
    <div className='my-4'>
   <Bandeau txt='Tous les Plannings !'/>
   </div>
   <div className='mx-8 text-center'>

    <div className='flex flex-col'>
   {planningTitles.map(({id, title}: IPlanningTitle) => {
           return <Link key={id} href={`plannings/${id}`}>
           <a className='text-xl md:text-2xl underline decoration-cel-orange decoration-2'>{title}</a>
         </Link>
        })
        }
        </div>
   </div>
   
  </Layout>)
}

export async function getStaticProps(){
  const planningTitles = await getAllPlannings()
  
  return {
      props: {
        planningTitles
      } 
  }
}