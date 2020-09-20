import React,{useState} from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap';
import NavLogo from '../img/navLogoAzul.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  const sidenav = document.getElementById("mySidenav");

  const [showNav, setShowNav] = useState(false)

  const handleNav = ()=>{
    setShowNav(!showNav)
    showNav ? document.getElementById("mySidenav").style.width = "0" : document.getElementById("mySidenav").style.width = "100%";
  }
  const closeNav=()=> {
    document.getElementById("mySidenav").style.width = "0"
   }
  return (
    <>
    <div id="mySidenav" className="sidenav">
      {/* <a href="#" class="closebtn">&times;</a> */}
      <Link to="/signup" onClick={closeNav}>Register</Link>
      <Link to="/login" onClick={closeNav}>Login</Link>
      <Link to="/dashboard" onClick={closeNav}>Dashboard</Link>
    </div>
    <Navbar expand="lg" className="" fixed="top">
      <Container fluid>
      <Navbar.Brand href="#home"><img src={NavLogo}/></Navbar.Brand>
      <Nav className="ml-auto">
        <div className="burguer" onClick={handleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Nav>
      </Container>
    </Navbar>
    </>
  );
}
