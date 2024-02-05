import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import AddBookModal from "../books/add-book/AddBookModal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthReducer";

const Header = () => {
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutClickHandler = () => {
    dispatch(authActions.logout());
    navigate("/", { replace: true });
  };
  const toggleAddBookModal = () => {
    setShowAddBookModal(!showAddBookModal);
  };

  return (
    <Navbar className={styles.navbar} data-bs-theme="dark" fixed>
      <Container>
        <Navbar.Brand className={`${styles.brand} fs-1`} href="#home">
          Hiver Book Library
        </Navbar.Brand>
        {isLoggedIn && (
          <Nav className={styles["custom-nav"]}>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/my-books">
              My Books
            </Nav.Link>
            {user.role === "Admin" && (
              <>
                <Nav.Link as={NavLink} onClick={toggleAddBookModal} to="/">
                  Add Books
                </Nav.Link>
                <AddBookModal
                  showAddBookModal={showAddBookModal}
                  toggleAddBookModal={toggleAddBookModal}
                />
                <Nav.Link as={NavLink} to="/requests">
                  Books requests
                </Nav.Link>
              </>
            )}
            <Nav.Link className="text-danger" onClick={logOutClickHandler}>
              Log Out
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
export default Header;
