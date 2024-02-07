import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/books/all-book-list/BookList";
import BookDetail from "./components/books/book-detail/BookDetail";
import RequestList from "./components/requests/RequestList";
import MyBooksList from "./components/books/my-books/MyBooksList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  //set global header for axios
  const myToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + myToken;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLoggedIn && <AuthForm />}
              {isLoggedIn && <BookList />}
            </>
          }
        />
        {isLoggedIn && (
          <>
            <Route path="/books/:bookId" element={<BookDetail />} />
            <Route path="/my-books" element={<MyBooksList />} />
            {user.role === "Admin" && (
              <Route path="/requests" element={<RequestList />} />
            )}
          </>
        )}
        <Route
          path="*"
          element={<h1>Opps!!! You dont have right permissions.</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
