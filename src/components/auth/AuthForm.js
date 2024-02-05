import { useState } from "react";
import styles from "./AuthForm.module.css";
import BookUrls from "../../utils/BookUrl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthReducer";

const AuthForm = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  const onLoginClickHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const role = isAdmin ? "Admin" : "Student";
    formData.append("role", role);
    const userData = {};
    for (const [name, value] of formData.entries()) userData[name] = value;
    console.log(userData);
    try {
      const res = await axios.post(BookUrls.LOGIN_URL, userData);
      console.log(res.data);
      const token = res.data.access_token;
      dispatch(authActions.login({ token }));
    } catch (err) {
      console.log(err);
    }
  };

  const onSignUpClickHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const role = isAdmin ? "Admin" : "Student";
    formData.append("role", role);
    const userData = {};
    for (const [name, value] of formData.entries()) userData[name] = value;
    console.log(userData);
    try {
      const res = await axios.post(BookUrls.SIGNUP_URL, userData);
      alert("User Created Successfully. Please Login!!!");
      setShowSignUpForm(false);
      e.target.reset();
      // console.log("user created redirect to login ",res.data );
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="d-flex m-3">
          <h5 className="text-light me-2">Student</h5>
          <input
            className={styles["switch"]}
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          <h5 className="text-light ms-2">Admin</h5>
        </div>

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
              type="text"
              name="username"
              placeholder="Username"
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
