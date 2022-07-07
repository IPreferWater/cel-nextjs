import { getAllCreations, getCreationByName } from "@api"
import Link from 'next/link'
import { LazyImage} from '@components/lazy-image'
import ReactMarkdown from "react-markdown/with-html";

export default class Creations extends React.Component {

    state = {imgLoaded: false};
    componentDidMount () {
        this.setState({imgLoaded: true})
      }
render(){
    const data = props.content
    return <div>
            <div className="text-3xl">{data.title}</div>
            <div className="bold">informations</div>
    </div>
    }
}

export async function getStaticProps(context){
    return {
        props: await getCreationByName(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getAllCreations()

    paths = paths.map(post => ({
        params: { slug:post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}