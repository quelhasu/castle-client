import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
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
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <Navbar style={navbarStyle} fixed="top" color="light" light expand="md">
      <NavbarBrand href="/">
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/105/european-castle_1f3f0.png" style={navbarLogoStyle}/>
        Castle    
      </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
    </Navbar>

    
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
