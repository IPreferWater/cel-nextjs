import { getPlanningBySlug, getAllPlannings } from "@api"
import { PlanningDay } from "@components/planningday"

export default function Planning(props){
    const data = props.content

    return <div>
            <article>
                <h1>{data.label}</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">                {data.planning.map((day, index) => (
                    <PlanningDay  key={index} day={day}/>
    ))}
    </div>
                

            </article>
    </div>
}

export async function getStaticProps(context){
    return {
        props: await getPlanningBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getAllPlannings()
    paths = paths.map(planning => ({
        params: { slug:planning.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}