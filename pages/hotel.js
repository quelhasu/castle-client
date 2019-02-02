import { withRouter } from "next/router";
import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import config from "../config/config";
import Error from 'next/error'

export default class Hotel extends React.Component {
  static async getInitialProps(context) {
    const { id, destination } = context.query;
    const res = await fetch(`${config.api_url}/hotel/${destination}/${id}`);
    const statusCode = res.status > 200 ? res.status : false;
    if(statusCode) return { statusCode };
    const hotel = await res.json();
    console.log(`Show data fetched. Count: ${hotel.name}`)
    return { hotel };
  }

  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }

    return (
      <Layout>
        <h1>{this.props.hotel.name}</h1>
        <p>{this.props.hotel.from_price}</p>
        <a href={this.props.hotel.link}>URL</a>
      </Layout>
    );
  }
}
