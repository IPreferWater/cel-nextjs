import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getConfig ,getAllPosts, getAllPlannings } from '@api'
import { BandeauCleo} from '@components/bandeau-cleo'
import { LazyImage} from '@components/lazy-image'

  export default  class Home extends React.Component {

    state = {imgLoaded: false};

      

    componentDidMount () {
        setTimeout(() => {  this.setState({imgLoaded: true}); }, 2000);
        //this.setState({imgLoaded: true})
      }
      render() {
  return (
    <div className={styles.container}>
         <div>
    <LazyImage fileName={'bandeau_top.jpeg'} loaded={this.state.imgLoaded} ></LazyImage>
  </div>
<BandeauCleo/>
            <p>List of plannings:</p>
            <ul>
                {this.props.plannings.map(function(planning, idx){
                    return (
                        <li key={idx}>
                            <Link href={`/plannings/${planning.slug}`}>
                                <a>{planning.slug}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
      <p>List of posts:</p>
            <ul>
                {this.props.posts.map(function(post, idx){
                    return (
                        <li key={idx}>
                            <Link href={`/posts/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
    </div>
  )}
}

export async function getStaticProps(){
  const config = await getConfig()
  const allPosts = await getAllPosts()
  const allPlannings = await getAllPlannings()

  return {
      props: {
          posts: allPosts,
          plannings: allPlannings,
          title: config.title,
          description: config.description
      }
  }
}