import { useState } from "react";
import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function onLogInClicked() {
    setIsLogged(true);
  }

  function onLogOutClicked() {
    localStorage.clear();
    setIsLogged(false);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onLogOutClicked={onLogOutClicked} isLogged={isLogged} />
              {!isLogged && <AuthForm onLogInClicked={onLogInClicked} />}
            </>
          }
        />
        {isLogged && (
          <>
            <Route
              path="/home"
              element={<h1>Add the BookList element here</h1>}
            />
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
