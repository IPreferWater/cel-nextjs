import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'
import {Item} from '@/components/ou/Item'

const OuPage = () => (
  <Layout title="localisation atelier">
        <div className='mb-4'>
   <Bandeau txt='Où c’est qu’il est l’atelier'/>
   </div>

   <div className='flex flex-col text-center gap-y-8 mb-8'>
   <Item title='Adresse' txts={['6 rue masséna, 59493 Ascq']}/>
   <Item title='Coordonées GPS' txts={['50.622139155560795','3.1641727593034488']}/>
   <a className='underline decoration-cel-orange decoration-2' href='https://www.google.com/maps/place/Clementine+est+l%C3%A0/@50.6214062,3.1534306,15z/data=!4m5!3m4!1s0x0:0xe3be3721fdd4b2a7!8m2!3d50.622223!4d3.1642882' target='_blank'>google map</a>

   <Item title='Oui mais c’est où ?!' txts={['l’atelier est situé dans une petite servitude']}/>

   <Item  txts={['Venant de Rue Gaston Barrate / Boulevard Montalembert']} img='ou/ou_from_gaston_baratte.jpg'/>
   <Item  txts={['Venant de Rue Kléber']} img='ou/ou_from_kleber.jpg'/>
   <Item  txts={['Dans cette servitude, la 3eme maison sur votre droite']} img='ou/ou_garage.jpg'/>
   <Item  txts={['Vous ne pouvez pas louper la pancarte sur la porte !']} img='ou/ou_pancarte.jpg'/>
   <p className='text-xs text-zinc-500'>(sauf si j’ai l’ai laissé ouverte ... )</p>
   <Item title='Accéder'/>
   <Item title='Vélo'  txts={['Vous pouvez laisser votre vélo sur la terasse devant l’atelier, vous pourez ainsi surveiller qu’il ne fugue pas', 'Si vous avez peur qu’il attrape froid avec la pluie nous le mettrons au Garage avec le mien ']} img='ou/ou_interieur.jpg'/>
   
   <p className='text-xs text-zinc-500'>(merci de ne ramener que des vélos bien dressés pour ne pas embêter les voisins)</p>
   <Item title='Train' txts={['La Gare d’ascq  est à 350m à pied de l’atelier et à 15 minutes de Lille Flandre']} img='ou/ou_train.jpg'/>
   <Item title='Bus' txts={['Vous pouvez prendre les lignes 13 - 73 - 910 La 73 et 910 passent par le metro Pont-de-bois', 'Horaires']}/>
    <div className='flex flex-row content-center '>
    <a className='w-full underline decoration-cel-orange decoration-2' href='https://www.ilevia.fr/pdf/PDF_Lignes/fiche-13.pdf' target='_blank'>Ligne 13</a>
    <a className='w-full underline decoration-cel-orange decoration-2' href='https://www.ilevia.fr/cms/institutionnel/wp-content/uploads/sites/4/2022/06/fiche-73-web.pdf' target='_blank'>Ligne 73</a>
    <a className='w-full underline decoration-cel-orange decoration-2' href='https://www.ilevia.fr/cms/institutionnel/wp-content/uploads/sites/4/2022/08/fiche-910-web_OK.pdf' target='_blank'>Ligne 910</a>
    </div>   

    <Item title='Voiture' txts={['Il y a une place de disponible devant le garage de l’atelier']}/>

    <Item txts={['La place est reservée aux particpants de l’atelier Si une personne est deja arrivée des places sont disponibles :', 'Rue Masséna']} img='ou/ou_parking_1.jpg'/>
    <Item txts={['Rue des Martyrs']} img='ou/ou_parking_2.jpg'/>
   </div>



    
  </Layout>
)

export default OuPage
