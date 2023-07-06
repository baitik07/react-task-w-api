import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>News.KG</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/add-blog")}>Add Blog</Nav.Link>
          <Nav.Link onClick={() => navigate("/aboutUs")}>About Us</Nav.Link>
          <Nav.Link onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
          <Nav.Link onClick={() => navigate("/favorites")}>Favourite</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
