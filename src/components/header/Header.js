import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddBookModal from "../books/add-book/AddBookModal";

const Header = (props) => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const toggleAddBookModal = () => {
    setShowAddBookModal(!showAddBookModal);
  };

  return (
    <Navbar className={styles.navbar} data-bs-theme="dark" fixed>
      <Container>
        <Navbar.Brand className={`${styles.brand} fs-1`} href="#home">
          Hiver Book Library
        </Navbar.Brand>
        {props.isLogged && (
          <Nav className={styles["custom-nav"]}>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              My Books
            </Nav.Link>
            <Nav.Link as={NavLink} onClick={toggleAddBookModal}>
              Add Books
            </Nav.Link>
            <AddBookModal
              showAddBookModal={showAddBookModal}
              toggleAddBookModal={toggleAddBookModal}
            />
            <Nav.Link className="text-danger" onClick={props.onLogOutClicked}>
              Log Out
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
export default Header;
