import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Favicon from 'react-favicon';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const linkStyle = {
  marginRight: 15
};

const headerStyle = {
  marginBottom: 30
};

const navbarLogoStyle = {
  height: 35,
  marginRight: 10,
  marginTop: -10
}

const navbarStyle = {
  borderBottom: "0.5px solid #d1d1d1",
  backgroundColor: "#FFF!important",
  padding: "0.5rem 2rem",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2)"
}

const Header = () => (
  <div style={headerStyle}>
  <title>Castle</title>
  <Favicon url="/static/favicon.ico"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
   integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
   crossOrigin=""/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
    <Navbar style={navbarStyle} fixed="top" color="light" light expand="md">
      <NavbarBrand href="/">
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/105/european-castle_1f3f0.png" style={navbarLogoStyle}/>
        Castle    
      </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/quelhasu/castle-client">GitHub <i class="fab fa-github-alt"></i></NavLink>
          </NavItem>

        </Nav>
    </Navbar>

    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
   integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
   crossOrigin=""></script>
    {/*<h1>Castle project</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
  </div>
);

export default Header;
