import Header from './Header'

const layoutStyle = {
  // margin: 20,
  // border: '1px solid #DDD'
  // fontFamily: "'Montserrat', sans-serif !important"  
}

const bodyStyle = {
  padding: 20,
  paddingTop: 70,
}

const Layout = (props) => (
  <div>
     <style jsx global>{`
      html, body, * { 
        font-family: 'Montserrat', sans-serif;
      }
      img {
        max-height: 200px;
        max-width: 300px;
      }
    `}</style>
    <Header/>
    <div style={bodyStyle}>
    {props.children}
    </div>
  </div>
)

export default Layout