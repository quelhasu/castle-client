import Layout from "../components/Layout.js";
import Link from "next/link";
import dynamic from 'next/dynamic'

import fetch from "isomorphic-unfetch";
import config from "../config/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import NProgress from 'nprogress'
import Router from 'next/router';
import { parse } from "querystring";
const MaterialTableLayout = dynamic(import("../components/MaterialTableLayout.js"));
const TopHotelLayout = dynamic(import("../components/TopHotelLayout"));
import { Container, Row, Col } from 'react-grid-system';




Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


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

    var topHotels = data;
    topHotels.sort((a,b) => parseFloat(a.from_price) - parseFloat(b.from_price));
    topHotels = topHotels.slice(0,3);
    
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      hotels: data,
      topHotels: topHotels
    };
  }

  componentDidMount = () => {
    this.setState({ currently: "success" });
    NProgress.start();
    NProgress.configure({ easing: 'ease', speed: 500 });
  }
  

  render() {
    let { currently } = this.state;
    var topHotels = this.props.topHotels.map(el => {return <Col xs={10} md={4}><TopHotelLayout hotel={el}/></Col>})
    return (
      <Layout>
    <style jsx>{`
      .MuiTableCell-body-138 {
        font-size:1rem !important;
      }

    `}</style>
    {currently === "loading" ? '' : (
          <div>
            <h3>Selection</h3>
            <Container fluid style={{ marginBottom : "50px", marginTop: "30px"}}>
              <Row>
                {topHotels}
              </Row>
            </Container>
            <MaterialTableLayout hotels={this.props.hotels} />
          </div>
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
