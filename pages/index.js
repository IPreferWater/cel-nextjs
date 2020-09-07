import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getConfig ,getAllPosts, getAllPlannings } from '@api'
import { BandeauCleo} from '@components/bandeau-cleo'

export default function Home(props) {
  return (
    <div className={styles.container}>

<BandeauCleo/>
            <p>List of plannings:</p>
            <ul>
                {props.plannings.map(function(planning, idx){
                    return (
                        <li key={idx}>
                            <Link href={`/plannings/${planning.slug}`}>
                                <a>todo</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
      <p>List of posts:</p>
            <ul>
                {props.posts.map(function(post, idx){
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
  )
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