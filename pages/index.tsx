import Link from 'next/link'
import Layout from '../components/Layout'


type IndexProps = {
  todo: string
}
  export default function IndexPage({ todo } : IndexProps) {


  return (<Layout title="index">
    <h1>Index</h1>
   
  </Layout>)
}

export async function getStaticProps() {
 /* const posts = getSortedPostsData() as Post[]
  return {
    props: {
      posts
    }
  }*/
  return {
    props : {
      todo:"todo"
    }
  }
}
