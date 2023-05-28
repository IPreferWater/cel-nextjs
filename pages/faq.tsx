import {Layout} from '../components/Layout'
import {Bandeau} from '@/components/Bandeau'
import {Question} from '@/components/faq/Question'
import { IQuestionProps } from '@/interfaces/index';

export default function ReparationsTransformations() {

  const faqs = [
    {
      question:'Quels sont les tarifs ?',
      texts:["Pour les cours particuliers : 25€ de l'heure",'Les ateliers projet libre : 25€ pour les 2h','Les cours de couture au mois : 55€','Les stages de couture : 70€ pour les 3 jours (matériel fourni)']
    },
    {
      question:'Est-ce accessible pour les débutants ?',
      texts:["Totalement, je m'adapte à vous et vous propose de réaliser des projets en fonction de votre niveau"]
    },
    {
      question:'Puis-je ramener ma machine ?',
      texts:["Bien sûr ! C'est même conseillé si vous en avez une car comme cela je vous apprendrai à la maîtriser et vous pourrez être autonome à la maison."]
    },
    {
      question:'Je n\'ai pas de machine, comment faire ?',
      texts:['Il y a 6 machines à l\'atelier que vous pouvez utiliser (2 machines électroniques, 2 mécaniques, une piqueuse plate industrielle et une surjeteuse)']
    },
    {
      question:'Des stages de couture de plusieurs jours sont-ils organisés ?',
      texts:['Oui pendant les vacances scolaires, 2 sessions de 3 jours chacune sont organisées, à raison d\'1h30 par jour. Accessibles pour tous les niveaux !']
    },
    {
      question:'Quels sont les outils "indispensables" pour se mettre à la couture ?',
      texts:['Voici une liste non exhaustive d\'outils et matériel :','','- du fil élastique noir','- assortiment d\'aiguilles à machine (marque Bohin ou Organ)','- épingles extrafines','- assortiment d\'aiguille à coudre (couture main)','- ciseaux de couturière (fiska c\'est top), ciseaux que pour le tissu !!','- coupe fil','- ciseaux cranteurs','- découseur','- épingles à tête de verre','- Règle japonaise','- Equerre','- mètre ruban','- Craie tailleur','- stylo frixion','- feutre textile effaçable à l\'eau']
    },
    {
      question:'C\'est possible de réserver pour un atelier à domicile ?',
      texts:['Tout à fait ! Je peux me déplacer à vélo avec le matériel nécessaire + une machine à coudre à Villeneuve d\'Ascq et alentours (+/- 4km), le tarif s\'élèvera dans ce cas-là entre 30 et 35€ de l\'heure (en fonction du nombre de km)']
    },
    {
      question:'C\'est accessible à partir de quel âge ?',
      texts:['Les cours sont accessibles à partir de 8 ans']
    },
    {
      question:'Quelles sont les différentes options de cours de couture ?',
      texts:['Sont accessibles soit : ', '- des cours particuliers', '- des ateliers projets libres (3 personnes max/atelier)', '- des cours de coutures au mois','- stages de coutures pendant les vacances scolaires']
    },
    {
      question:'Quel peut être le moyen de paiement ?',
      texts:['Vous pouvez régler en espèces ou CB']
    },
    {
      question:'Je peux ramener un projet ?',
      texts:['Oui tout à fait je m\'adapte à vous et à vos envies 🙂.', 'Après si vous ne savez pas trop quoi réaliser, je vous propose des idées de créations en fonction de votre niveau et de vos envies']
    }
  ]

  return (<Layout title="Clementinestla FAQ"  metaName = "Questions les plus posé" metaDescription="Liste des questions fréquentes posé pour les ateliers de coutures">
        <div className='mb-4'>
   <Bandeau txt='FAQ'/>
   </div>
   <div className='flex flex-col gap-y-8 content-center items-center'>
    {
faqs.map(({question, texts}: IQuestionProps) => {
  return <div key={question} className='w-full md:w-2/3'>
   <Question question={question} texts = {texts}/>
   </div>
})
}
   </div>
  </Layout>
)
}
