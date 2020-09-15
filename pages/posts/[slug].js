import { getPostBySlug, getAllPosts } from "@api"
import Link from 'next/link'
import { LazyImage} from '@components/lazy-image'

export default class Post extends React.Component {

    state = {imgLoaded: false};
    componentDidMount () {
        setTimeout(() => {  this.setState({imgLoaded: true}); }, 2000);
        //this.setState({imgLoaded: true})
      }
render(){
    console.log("data img => "+this.props.image)

    return <div>
            <article>
                <div className="object-center">
                <LazyImage fileName={this.props.image} loaded={this.state.imgLoaded} ></LazyImage>
                </div>
                <h1>{this.props.title}</h1>
                <div dangerouslySetInnerHTML={{__html:this.props.content}}/>
                <div><Link href='/'><a>Home</a></Link></div> 
            </article>
    </div>
    }
}

export async function getStaticProps(context){
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getAllPosts()
    paths = paths.map(post => ({
        params: { slug:post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}