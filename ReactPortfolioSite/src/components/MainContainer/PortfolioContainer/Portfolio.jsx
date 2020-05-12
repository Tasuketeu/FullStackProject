import React from "react";
import s from "./Portfolio.module.css";
import Select from "react-select";

import {
  Container,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";


export let Portfolio = (props) => {
  return (
    <div className={s.navigation}>
    <Navbar expand="lg">
    <Container>	
  <Navbar.Brand href="/">Портфолио</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className={s.navLinks}>
      <Nav.Link className={s.navLink} href="#home">О компании</Nav.Link>
      <Nav.Link className={s.navLink} href="/contacts">Контакты</Nav.Link>
      <Nav.Link className={s.navLink} href="/services">Услуги</Nav.Link>
      <Nav.Link className={s.navLink} href="/reviews">Отзывы</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};
