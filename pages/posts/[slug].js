import { getPostBySlug, getAllPosts } from "@api"
import Link from 'next/link'
export default function Post(props){
    return <div>
            <article>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{__html:props.content}}/>
                <div><Link href='/'><a>Home</a></Link></div> 
            </article>
    </div>
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