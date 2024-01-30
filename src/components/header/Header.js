import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <Navbar className={styles.navbar} data-bs-theme="dark" fixed>
        <Container>
          <Navbar.Brand className={`${styles.brand} fs-1`} href="#home">Hiver Book Store</Navbar.Brand>
          {/* <Nav className="m-auto">
            <Nav.Link href="#expense-title">All Expenses</Nav.Link>
            <Nav.Link className="text-danger">Log Out</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
  );
};
export default Header;