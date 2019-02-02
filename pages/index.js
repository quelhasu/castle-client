import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import config from '../config/config'

console.log(config.api_url);

const PostLink = (props) => (
  <li>
    <Link as={`/p${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Hotels</h1>
    <ul>
      {props.hotels.map((hotel) => (
        <li key={hotel.id}>
          <Link as={`/h/france/${hotel.id}`} href={`/h/france/${hotel.id}`}>
            <a>{hotel.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch(`${config.api_url}/hotel/france`)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    hotels: data
  }
}

export default Index

// export default () => (
//   <Layout>
//     <h1>Castle</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )