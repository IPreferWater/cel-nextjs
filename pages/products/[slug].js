import { getProductBySlugAndCategory, getAllProductsByCategory } from "@api"
import Link from 'next/link'
import { LazyImage} from '@components/lazy-image'
import ReactMarkdown from "react-markdown/with-html";

export default class Product extends React.Component {

    state = {imgLoaded: false};
    componentDidMount () {
        this.setState({imgLoaded: true})
      }
render(){
    return <div>
            <article className="content-center text-beach-black w-full">
                <LazyImage objectBehavior="object-contain" className="h-64 w-64" fileName={this.props.image} loaded={this.state.imgLoaded} ></LazyImage>
                <h1 className="underline my-10">{this.props.title}</h1>
                <ReactMarkdown escapeHtml={false} source={this.props.content} />
                <div><Link href='/'><a>Home</a></Link></div> 
            </article>
    </div>
    }
}

export async function getStaticProps(context){
    return {
        props: await getProductBySlugAndCategory(context.params.slug, "noel")
    }
}

export async function getStaticPaths(){
    let paths = await getAllProductsByCategory("noel")

    paths = paths.map(post => ({
        params: { slug:post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}