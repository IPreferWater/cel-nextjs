import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'
import {SquaredPaper} from '@/components/tarifs/SquaredPaper'

  export default function ReparationsTransformations() {

    const pricesDress = [
      {
        title:'Ourlet simple',
        price:10
      },
      {
        title:'Bas de jambe à cintrer',
        price:20
      },
      {
        title:'Fermeture éclair à remplacer',
        price:15
      },
      {
        title:'Couture décousue à reprendre',
        price:3
      },
      {
        title:'Déchirure à réparer',
        price:10
      }
    ]

    const pricesBroderies = [
      {
        title:'Initiales',
        price:10
      },
      {
        title:'Mot écrit en petite police',
        price:15
      }
    ]

    const upcyclingSentences = [
      `Envie de modifier totalement l'aspect de votre vêtement`,
      `Nous pouvons prendre RDV et en parler ensemble`     
    ]
    

  return (<Layout title="Clementinestla retouches réparations tarifs"  metaName = "Prix" metaDescription="Liste de prix pour les differentes retouche disponible chez Clementinestla">
    <div className='mb-4'>
   <Bandeau txt='Tableau des tarifs pour les retouches et réparations'/>
   </div>
   <div className='background-grid-green relative m-6 lg:mx-20 pt-8'>
    <img className='h-24 absolute -top-8 -left-8 object-scale-down' src='/icon_new.svg'/>
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>

  <SquaredPaper title='Pantalon Robe Jupe' rotateLeft={true} priceTab={pricesDress} />
  <SquaredPaper title='Broderie' rotateLeft={false} priceTab={pricesBroderies} />
  

  </div>
    {/*for now, the last item is centered*/}
    <div className='md:w-1/2 m-auto pb-8'>
    <SquaredPaper title='Upcycling' rotateLeft={true} sentences={upcyclingSentences}/>
  </div>

    </div>


   
  </Layout>)
}