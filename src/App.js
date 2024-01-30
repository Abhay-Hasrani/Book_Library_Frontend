import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import Header from "./components/header/Header";

function App() {
  let isLogged =  true;
  return <>
  <Header/>
  <AuthForm />
  </>
}

export default App;
