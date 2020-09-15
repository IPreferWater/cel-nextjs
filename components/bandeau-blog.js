import { LazyImage} from '@components/lazy-image'
import Link from 'next/link'

export class BandeauBlog extends React.Component {
    state = {imgLoaded: true};
    render() {
        return (
            <section className="w-full">
               <div className="flex flex-wrap content-center justify-between">
               {this.props.latestPosts.map((post, i) =>
               <Link href={`/posts/${post.slug}`}>
               <image key={i} className="h-64 w-64">
                   <LazyImage  fileName={post.image} loaded={this.state.imgLoaded} ></LazyImage>
                   </image>
               </Link>

    )}
                   </div>
            </section>
        )
    }

}