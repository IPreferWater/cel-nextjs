//import { LazyImage} from '@components/lazy-image'

import Link from 'next/link'

function NavigationTable({plannings}) {
    //state = {imgLoaded: true};

    //this is not nice but I don't know what draw back could occuered if I change the title for the plannings
     function getNiceLabelForCalendar(title) {
        var res = title.split(" -");
        return res[0]
      }


        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 font-railey" >

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`} className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Tarifs des réparations<br></br>et<br></br>transformations des vêtements</span>
                    </Link>
                </section>

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`} className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Upcycling & Customisation</span>
                    </Link>
                </section>

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                        {plannings.map(function (planning, idx) {
                            
                            return (
                                <Link key={idx} href={`/plannings/${planning.slug}`} className="w-auto  h-40 text-beach-grey text-4xl text-center">
                                        <p>Ateliers et cours de coutures <br></br> pour {getNiceLabelForCalendar(planning.title)} </p>
                                </Link>
                            )
                        })}
                </section>



                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`} className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Créations d'accessoires & vetements uniques</span>
                    </Link>
                </section>

            </div>
        )
}

export default NavigationTable;