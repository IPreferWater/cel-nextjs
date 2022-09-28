import {Layout} from '../../components/Layout'
import { getPlanningByID, getAllPlannings } from "../api/planning"
import {IPlanning} from '@/interfaces/index'
import {PlanningDay} from '@/components/plannings/PlanningDay'
import {Bandeau} from '@/components/Bandeau'

type PlanningProps = {
    planning: IPlanning,
    id: string
}
export default function PlanningsPage({planning, id}:PlanningProps) {
    return (<Layout title="Planning">
        <Bandeau txt={planning.title}/>        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {planning.days.map((day, index) => 
             <PlanningDay  key={index} day={day} id={id} dayNumber={index+1}/>
             )}
        </div>
    </Layout>)
}

export async function getStaticProps(context:any){
    const planning = getPlanningByID(context.params.id)
    const id = context.params.id
    return {
        props: {
            planning,
            id
        } 
    }
}

export async function getStaticPaths(){
    let paths = await getAllPlannings()
    const paramsPaths = paths.map(planning => ({
        params: { id:planning.id, title:planning.title }
    }));
    return {
        paths: paramsPaths,
        fallback: false
    }
}