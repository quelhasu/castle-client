import Layout from "../components/Layout.js";
import Link from "next/link";
import dynamic from 'next/dynamic'

import fetch from "isomorphic-unfetch";
import config from "../config/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import NProgress from 'nprogress'
import Router from 'next/router';
const MaterialTableLayout = dynamic(import("../components/MaterialTableLayout.js"));


Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

console.log(config.api_url);

const PostLink = props => (
  <li>
    <Link as={`/p${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);


const Index = props => (
  <Layout>
    <style jsx>{`
      .MuiTableCell-body-138 {
        font-size:1rem !important;
      }
    `}</style>
    <MaterialTableLayout hotels={props.hotels}/>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(`${config.api_url}/hotel/france`);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    hotels: data
  };
};

export default Index;

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
