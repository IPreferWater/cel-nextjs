import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getConfig, getAllPosts, getAllPlannings, getLatestsPostsByNumber } from '@api'
import { BandeauCleo } from '@components/bandeau-cleo'
import { BandeauBlog } from '@components/bandeau-blog'
import { LazyImage } from '@components/lazy-image'
import { ClementineIcon } from '@components/icons/clementine-icon'

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
export default class Home extends React.Component {

    state = { imgLoaded: false };
    t = {

        resolve: autoplayPlugin,
        options: {
            interval: 2000,
        }

    }
    componentDidMount() {
        this.setState({ imgLoaded: false })
    }
    render() {
        return (
            <div className={styles.container}>
                <section className="w-full p-8 bg-beach-sand rounded-lg mb-4">
                    <div className="flex flex-col sm:flex-row justify-center">
                        <ClementineIcon className="sm-max:w-full justify-center" />
                        <h1 className="text-center text-beach-grey font-extrabold">Consommez autrement, upcyclez votre quotidien !</h1>
                        <ClementineIcon className=" sm-max:w-full justify-center " />
                    </div>
                </section>

                <Carousel infinite autoPlay={3500} >
                    <LazyImage fileName={'bandeau_top.jpeg'} loaded={this.state.imgLoaded} ></LazyImage>
                    <LazyImage fileName={'about_photo.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
                </Carousel>

                <BandeauCleo />

                <section className="w-1/2 bg-beach-sand rounded-lg">
                    <Carousel arrows>
                        {this.props.plannings.map(function (planning, idx) {
                            return (
                                <Link key={idx} href={`/plannings/${planning.slug}`}>
                                    <a className="w-full  h-24 text-beach-grey font-extrabold text-2xl text-center">
                                        planning {planning.title}
                                    </a>
                                </Link>

                            )
                        })}
                    </Carousel>
                </section>


                <p>List of plannings:</p>
                <ul>

                </ul>
                <p>List of posts:</p>
                <ul>
                    {this.props.posts.map(function (post, idx) {
                        return (
                            <li key={idx}>
                                <Link href={`/posts/${post.slug}`}>
                                    <a>{post.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <BandeauBlog latestPosts={this.props.latestPosts} />
            </div>
        )
    }
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    const allPlannings = await getAllPlannings()
    const latestPosts = await getLatestsPostsByNumber()

    return {
        props: {
            posts: allPosts,
            plannings: allPlannings,
            title: config.title,
            description: config.description,
            latestPosts: latestPosts
        }
    }
}