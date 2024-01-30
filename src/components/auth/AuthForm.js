import styles from "./AuthForm.module.css";
const AuthForm = () => {
  return (
    <div className={styles["auth-form-box"]}>
      <div className={styles.main}>
        <input type="checkbox" id={styles.chk} aria-hidden="true" />

        <div className={styles.login}>
          <form className={styles.form}>
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
              name="pswd"
              placeholder="Password"
              required
            />
            <button>Log in</button>
          </form>
        </div>

        <div className={styles.register}>
          <form className={styles.form}>
            <label htmlFor={styles.chk} aria-hidden="true">
              Sign Up
            </label>
            <input
              className={styles.input}
              type="text"
              name="txt"
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
              name="pswd"
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
