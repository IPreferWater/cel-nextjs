import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getConfig, getAllPosts, getAllPlannings } from '@api'
import { BandeauCleo } from '@components/bandeau-cleo'
import { BandeauBlog } from '@components/bandeau-blog'
import { LazyImage } from '@components/lazy-image'
import { BaseIcon } from '@components/icons/base-icon'
import { NoelIcon } from '@components/icons/noel-icon'

import  NavigationTable  from '@components/navigation-table'


import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
export default class Home extends React.Component {

    state = { imgLoaded: false };
    t = {

        resolve: autoplayPlugin,
        options: {
            interval: 4000,
        }

    }
    componentDidMount() {
        this.setState({ imgLoaded: true })
    }
    render() {
        return (
            <div className={styles.container}>
                <section className="w-full  p-4 bg-beach-sand rounded-lg mb-4 sm:mb-10">
                    <div className="flex flex-col sm:flex-row justify-center items-center">
                        <BaseIcon className="h-12 w-12"/>
                        <h1 className="text-center text-cel-green  font-railey">Consommez autrement, upcyclez votre quotidien !</h1>
                        <BaseIcon className="h-12 w-12"/>
                    </div>
                </section>                
                <Carousel infinite  autoPlay={6000} animationSpeed={3000} dots >
                <div className="w-full md:w-4/5 lg:w-2/3 xl:w-3/5 h-bandeau"><LazyImage fileName={'gangcharlotte.jpg'} loaded={this.state.imgLoaded}/></div>
                <div className="w-full md:w-4/5 lg:w-2/3 xl:w-3/5 h-bandeau"><LazyImage fileName={'bandeau_top.jpeg'} loaded={this.state.imgLoaded}/></div>
                </Carousel>

                <div className="flex flex-col items-center text-lg font-railey text-cel-green sm:mt-10">
                <div className="text-3xl  ">Objectif ?</div>
                <div className="text-5xl font-bold">Lutter contre le gaspillage textile</div>
                </div>

                <NavigationTable plannings={this.props.plannings}/>

                <div className="w-full md:w-4/5 text-center text-3xl text-cel-green sm:mt-10">
                <div className="font-railey text-3xl">contact</div>
                <div className="flex flex-col sm:flex-row  justify-between text-5xl">
                
                <div className="flex flex-col text-5xl">
                    <a className="font-railey p-10" href="mailto:clementinestla@gmail.com">
                    <div>par mail</div>
                    <div>clementinestla@gmail.com</div>
                    </a>
                </div>

                <div className="flex flex-col">
                <a className="font-railey p-10" target="_blank" href="https://www.google.com/maps/place/La+Bouquinerie+du+Sart/@50.659281,3.1364063,15z/data=!4m5!3m4!1s0x0:0x53ef5eda30be9290!8m2!3d50.659244!4d3.1363242">
                    <div>7 Boulevard Albert 1er à Villeneuve d'Ascq</div>
                    <div>🌏</div>
                    </a>
                </div>

                </div>
                </div>

               {/* <p>List of posts:</p>
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

                <BandeauBlog latestPosts={this.props.latestPosts} />*/}
            </div>
        )
    }
}

export async function getStaticProps() {
    const config = await getConfig()
    const allPosts = await getAllPosts()
    const allPlannings = await getAllPlannings()
    //const latestPosts = await getLatestsPostsByNumber()

    return {
        props: {
            posts: allPosts,
            plannings: allPlannings,
            title: config.title,
            description: config.description,
            //latestPosts: latestPosts
        }
    }
}