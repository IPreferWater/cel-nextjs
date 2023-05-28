import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'

type ComingSoonProps = {
  title: string
}

  export default function ComingSoonPage({title} : ComingSoonProps) {

    

  return (<Layout title="Clementinestla coming soon !"  metaName = "Page d'attente" metaDescription="Page temporaire en attendant que Clementine finisse le code du site">
    <div className='mb-4'>
   <Bandeau txt='BIENTOT !'/>
   </div>
   <div className='mx-8 text-center'>
    <h1 className='text-3xl'>{title}</h1>
    <div className='text-2xl'>Promis ça va être dingue ... je vais vous montrer comment avoir un diplôme de ouf sans payer les 16000 balles de l'école</div> 
   </div>
   
  </Layout>)
}