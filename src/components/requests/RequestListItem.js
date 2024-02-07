import { useNavigate } from "react-router-dom";
import styles from "./RequestListItem.module.css";

const RequestListItem = (props) => {
  const bookObj = props.book;

  const navigate = useNavigate();

  function detailsClickHandler() {
    navigate(`/books/${bookObj.id}`);
  }

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
        <button type="button" className={styles["accept"]}>
          Accept
        </button>
        <button type="button" onClick={detailsClickHandler}>Details</button>
        <button type="button" className={styles["reject"]}>
          Reject
        </button>
      </div>
    </div>
  );
};
export default RequestListItem;
