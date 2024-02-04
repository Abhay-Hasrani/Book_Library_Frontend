import styles from "./MyBooksElement.module.css";

const MyBooksListElement = (props) => {
  const bookObj = props.book;
  const status = "Returned";

  let buttonStyle = styles["active"];
  if (status === "Accepted") buttonStyle = styles["accepted"];
  else if (status === "Rejected") buttonStyle = styles["rejected"];
  else if (status === "Returned") buttonStyle = styles["returned"];
  else buttonStyle = styles["pending"];

  return (
    <div className={styles.wrapper}>
      <div className={styles["book-text"]}>
        <h1>{bookObj.title}</h1>
        <h2>
          by {bookObj.author}
          <br />
          <span>{bookObj.launched}</span>
        </h2>
      </div>
      <div className={styles["book-btn-box"]}>
        <button type="button">Details</button>
        <button
          type="button"
          className={buttonStyle}
          disabled={status !== "Accepted"}
        >
          {status === "Accepted" ? "Return" : status}
        </button>
      </div>
    </div>
  );
};
export default MyBooksListElement;
