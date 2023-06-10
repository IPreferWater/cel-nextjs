import Link from 'next/link'
import {Layout} from '../components/Layout'

const AboutPage = () => (
  <Layout title="Clementinestla"  metaName = "à propos" metaDescription="Présentation de Clémentine, couturiere, animatrice d'atelier et directrice de Clementinestla">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </Layout>
)

export default AboutPage
