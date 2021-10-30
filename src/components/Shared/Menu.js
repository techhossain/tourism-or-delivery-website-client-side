import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Menu = () => {
  const { user, logOut } = useAuth();

  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Tour Planner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link as={Link} to="/services">Services</Nav.Link> */}
              <Nav.Link as={Link} to="/tours">Tour Packages</Nav.Link>
              {
                user.email ?
                  <NavDropdown title="Pro Features" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/my-orders">My Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/manage-all-orders">Manage All Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/add-new">Add A New Service</NavDropdown.Item>
                  </NavDropdown>
                  :
                  ""
              }
              {
                user.email ? ''
                  :
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
              }
              {user.email ?
                <button className="btn btn-link" onClick={logOut}>Log Out</button>
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
            </Nav>

            {user.email ?
              <Navbar.Text className="ms-md-5">
                Signed in as: <Link to="/my-orders">{user?.displayName}</Link>
              </Navbar.Text>
              :
              ''
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;



