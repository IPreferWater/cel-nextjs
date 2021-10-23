import { LazyImage} from '@components/lazy-image'


export default  class Tarifs extends React.Component {

    state = {imgLoaded: false};


    componentDidMount () {
        setTimeout(() => {  this.setState({imgLoaded: true}); }, 2000);
        //this.setState({imgLoaded: true})
      }
    render(){

        var courantes = {
            'ourlet vêtement, à partir de ': 10
        };

    return <div className="text-center text-3xl">

        <div className="w-full">
        <div className="font-bold">Réparations les plus courantes</div>  

        <div className="flex flex-col justify-between text-center items-center"> 
                {Object.entries(courantes).map(function ([key, value])  {
                    console.log(`${key} ${value}`)
                    return <div className="flex flex-row justify-between w-4/5 md:w-1/2 text-4xl" key={`${key}-${value}`}>
                            <div>{key}</div>
                            <div>{value}€</div>
                        </div>                     
        })}
         </div>
        </div>

<div className="mt-10 font-bold">Upcycling transformation de vêtements</div>
<div className="flex flex-col  ">
    <span>Vous souhaitez customiser, modifier totalement vos vêtements ?</span>
    <span>Contactez-moi et nous en parlerons lors d'un rendez-vous privé.</span>
    <span>Devis sur place
    </span>
</div>

<a className="bg-beach-sand block mt-8 p-8 font-bold" href="mailto:cverein.professionnel@yahoo.fr?subject=demande rendez vous&body=J'aimerais un rendez-vous afin de discuter de mon projet">Prendre rendez-vous par mail</a>

    </div>
  }
}
  
