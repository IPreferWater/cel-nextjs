import {Layout} from '../components/Layout'
import {CoursComponent} from '@/components/cours/CoursComponent'

  export default function CoursPage() {

    

  return (<Layout title="Clementinestla cours couture Villeneuve d'ascq Lille">
    <div className='flex flex-col my-12 space-y-10'>

<CoursComponent titles={['Planning du mois'/* TODO: Clementine,'Réservation ici'*/]}>
<div className='flex flex-col w-full md:w-1/2 space-y-4 text-center items-stretch'>
        <p>Atelier couture projet libre de 2h : 3 personnes maximum, vous pouvez venir avec votre projet en tête ou je vous en propose un en fonction de votre niveau</p>
        <p className='font-bold'>Pour toutes questions ou réservation, n'hésitez pas à me joindre au 0698639883</p>
        <p className='font-bold'>Ateliers et cours ouverts à tous les niveaux, n’hésitez pas à envoyer un message pour plus d’informations</p>
        </div>
  </CoursComponent>

  <CoursComponent titles={['Cours particuliers']}>
<div className='flex flex-col w-full md:w-1/2 space-y-2 text-center'>
        <p>- Cours particuliers : en fonction de nos disponibilités respectives</p>
        <p>nous traitons le sujet et réalisons le projet que vous souhaitez</p>
        </div>
  </CoursComponent>
    
  <CoursComponent titles={['Cours au mois']}>
<ul className='flex flex-col w-full md:w-1/2 space-y-2 list-none text-center'>
  <li className='font-bold'>- Cours au mois :</li>
  <li>- Forfait de 55 € par mois</li>
  <li>- 1 cours d'1h45 par semaine</li>
  <li>- 3 places max par session</li>
  <li>- Règlement à chaque début de mois</li>
  <li>- Engagement au mois</li>
  </ul>
  </CoursComponent>
      

   </div>
  </Layout>)
}