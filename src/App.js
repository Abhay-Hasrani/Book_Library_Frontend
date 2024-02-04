import { useState } from "react";
import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/books/all-book-list/BookList";
import BookDetail from "./components/books/book-detail/BookDetail";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  function onLogInClicked() {
    setIsLogged(true);
  }

  function onLogOutClicked() {
    localStorage.clear();
    setIsLogged(false);
  }
  return (
    <>
      <Header onLogOutClicked={onLogOutClicked} isLogged={isLogged} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!isLogged && <AuthForm onLogInClicked={onLogInClicked} />}
              {isLogged && <BookList />}
            </>
          }
        />
        {isLogged && (
          <>
            <Route path="/books/:bookId" element={<BookDetail />} />
          </>
        )}
        <Route
          path="*"
          element={<h1>Sorry This route is not available at the moment</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
