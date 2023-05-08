import { useContext, useEffect } from "react";
import { LoginContext } from "../../App";
import { Navbar, Nav, Container } from "react-bootstrap";

// const navigation  = [
//   {name:'Employees', href:'/Employees'},
//   {name:'', href:''},
//   {name:'', href:''},
//   {name:'', href:''}
// ]

const Header = () => {
  // TUTORIAL 46 USE CONTEXT HOOK
  const [loggedIn, setLoggedIn] = useContext(LoginContext); //  USE CONTEXT CALL RETURNS VALUE OF VARIABLE PASSED LOGGED IN INITIAL STATE IS TRUE

  useEffect(() => {
    console.log(loggedIn);
  });

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">BS placeholder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/employees">Employees</Nav.Link>
            <Nav.Link href="/customers">Customers</Nav.Link>
            <Nav.Link href="/dictionary">Dictionary</Nav.Link>
            <Nav.Link href="/calender">Calender</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
