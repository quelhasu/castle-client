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

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currently: "loading"
    };
  }

  static async getInitialProps() {
    const res = await fetch(`${config.api_url}/hotel/france`);
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      hotels: data
    };
  }

  componentDidMount = () => {
    this.setState({ currently: "success" });
    NProgress.start();
    NProgress.configure({ easing: 'ease', speed: 500 });
  }

  render() {
    let { currently } = this.state;
    return (
      <Layout>
    <style jsx>{`
      .MuiTableCell-body-138 {
        font-size:1rem !important;
      }
    `}</style>
    {currently === "loading" ? '' : (
      <MaterialTableLayout hotels={this.props.hotels}/>
    )}
    
  </Layout>
    )
  }
}

// export default Index;

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
