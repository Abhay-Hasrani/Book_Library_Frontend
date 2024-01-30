import { useState } from "react";
import styles from "./AuthForm.module.css";
const AuthForm = (props) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  async function onLoginClickHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {};
    for (const [name, value] of formData.entries()) userData[name] = value;
    console.log(userData);
    try {
      // const res = await axios.post(BookUrl.logInUrl, userData);
      // localStorage.setItem("token", res.data.token);
      props.onLogInClicked();
      console.log("Welcome ", userData.email);
    } catch (err) {
      console.log(err);
    }
  }

  async function onSignUpClickHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {};
    for (const [name, value] of formData.entries()) userData[name] = value;
    console.log(userData);
    try {
      // const res = await axios.post(BookUrl.signUpUrl, userData);
      alert("User Created Successfully. Please Login!!!")
      setShowSignUpForm(false);
      console.log("user created redirect to login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles["auth-form-box"]}>
      <div className={styles.main}>
        <input
          type="checkbox"
          id={styles.chk}
          aria-hidden="true"
          checked={showSignUpForm}
          onChange={() => setShowSignUpForm(!showSignUpForm)}
        />

        <div className={styles.login}>
          <form
            onSubmit={onLoginClickHandler}
            method="post"
            className={styles.form}
          >
            <label htmlFor={styles.chk} aria-hidden="true">
              Log in
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Log in</button>
          </form>
        </div>

        <div className={styles.register}>
          <form onSubmit={onSignUpClickHandler} className={styles.form}>
            <label htmlFor={styles.chk} aria-hidden="true">
              Sign Up
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
