import Header from "./Header";

const layoutStyle = {
  // margin: 20,
  // border: '1px solid #DDD'
  // fontFamily: "'Montserrat', sans-serif !important"
};


const Layout = props => (
  <div>
    <style jsx global>{`
      html,
      body,
      * {
        font-family: "Montserrat", sans-serif;
      }
      img {
        max-height: 200px;
        max-width: 300px;
      }
      .leaflet-container {
        position: absolute;
        top: 55px;
        left: 0;
        height: 94.3vh;
        width: 100vw;
        z-index: -1000;
      }
      .bodyStyle{
        padding: 20px;
        padding-top: 70px;
      }
    `}</style>
    <Header />
    <div className='bodyStyle' >{props.children}</div>
  </div>
);

export default Layout;
