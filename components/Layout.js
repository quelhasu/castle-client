import Header from './Header'

const layoutStyle = {
  // margin: 20,
  // border: '1px solid #DDD'
}

const bodyStyle = {
  padding: 20,
  paddingTop: 70
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header/>
    <div style={bodyStyle}>
    {props.children}
    </div>
  </div>
)

export default Layout