import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'
import {Question} from '@/components/faq/question'

const FaqPage = () => (
  <Layout title="Clementinestla FAQ">
        <div className='mb-4'>
   <Bandeau txt='FAQ'/>
   </div>

   <div className='flex flex-col text-center gap-y-8'>
   <Question question='question 1' text = 'blablablablablablablablablablablablablablablablablabla'/>
   <Question question='question 2' text = 'blablablablablablablablablablablablablablablablablablablablablablablabla'/>
   <Question question='question 3' text = 'blablablablablablabla'/>
   
   </div>



    
  </Layout>
)

export default FaqPage
