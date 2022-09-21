import {Layout} from '../../components/Layout'
import { getPlanningByID, getAllPlannings } from "../api/planning"
import {IPlanning} from '@/interfaces/index'

type PlanningProps = {
    planning: IPlanning
}
export default function PlanningsPage({planning}:PlanningProps) {
    return (<Layout title="Planning">
        
        {planning.title}
    </Layout>)
}

export async function getStaticProps(context:any){
    const planning = getPlanningByID(context.params.id)
    console.log("a "+planning)
    return {
        props: {
            planning
        } 
    }
}

export async function getStaticPaths(){
    let paths = await getAllPlannings()
    console.log("paths "+paths)
    paths = paths.map(planning => ({
        params: { id:planning.id, title:planning.title }
    }));
    return {
        paths: paths,
        fallback: false
    }
}