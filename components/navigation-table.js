//import { LazyImage} from '@components/lazy-image'
import { CalendarIcon } from '@components/icons/calendar-icon'

import Link from 'next/link'

export class NavigationTable extends React.Component {
    //state = {imgLoaded: true};
    render() {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 font-railey" >

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`}>
                        <a className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Tarifs des réparations<br></br>&<br></br>transformations des vêtements</span>
                        </a>

                    </Link>
                </section>

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`}>
                        <a className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Upcycling & Customisation</span>
                        </a>

                    </Link>
                </section>

                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                        {this.props.plannings.map(function (planning, idx) {
                            
                            return (
                                <Link key={idx} href={`/plannings/${planning.slug}`}>
                                    <a className="w-auto  h-40 text-beach-grey text-4xl text-center">
                                        <p>Atelier & cours de coutures planning {planning.title}</p>
                                        <CalendarIcon className="w-full text-center"/>
                                    </a>
                                </Link>
                            )
                        })}
                </section>



                <section className="w-full bg-beach-sand rounded-lg flex flex-col">
                    <Link href={`/tarifs`}>
                        <a className="flex w-auto h-40">
                            <span className="m-auto text-beach-grey text-3xl text-center">Créations d'accessoires & vetements uniques</span>
                        </a>

                    </Link>
                </section>

            </div>
        )
    }

}