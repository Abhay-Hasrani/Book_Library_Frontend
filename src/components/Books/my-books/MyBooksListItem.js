import { useEffect, useState } from "react";
import styles from "./MyBooksListItem.module.css";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import LoadingIndicator from "../../ui/loading-indicator/LoadingIndicator";
import { formatDateTime } from "../../../utils/DateTimeConverter";

const MyBooksListItem = (props) => {
  const myRequest = props.request;
  const [myBook, setMyBook] = useState(null);
  const [status, setStatus] = useState(myRequest.status);
  const bookId = myRequest.book_id;

  useEffect(() => {
    const getBookByID = async (bookId) => {
      const res = await axios.get(BookUrls.BOOK_URL + bookId);
      setMyBook(res.data);
    };
    getBookByID(bookId);
  }, [bookId]);

  /**
   *
   * @param {String} new_status  New Status for the book request
   * @param {number} book_id -- book_id for which status is to be changed
   *
   * Changes the status to ("Accepted","Rejected","Pending","Returned") in the database
   */
  const changeRequestStatus = async (new_status, book_id) => {
    try {
      const requestData = {
        book_id: book_id,
        status: new_status,
      };
      const res = await axios.put(BookUrls.PUT_REQUEST_STATUS_URL, requestData);
      console.log(res.data);
      setStatus("Returned");
    } catch (error) {
      console.log(error.message);
    }
  };

  let buttonStyle = styles["active"];
  if (status === "Accepted") buttonStyle = styles["accepted"];
  else if (status === "Rejected") buttonStyle = styles["rejected"];
  else if (status === "Returned") buttonStyle = styles["returned"];
  else buttonStyle = styles["pending"];

  return !myBook ? (
    <LoadingIndicator />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles["book-text"]}>
        <h1>{myBook.title}</h1>
        <h2>
          by {myBook.author}
          <br />
          <span>{myBook.launched}</span>
        </h2>
        <div className={styles["user-detail"]}>
          {` Received : ${formatDateTime(myRequest.created_at)}`}
          <br />
          {` Updated : ${formatDateTime(myRequest.updated_at)}`}
        </div>
      </div>
      <div className={styles["book-btn-box"]}>
        <button type="button">Details</button>
        <button
          type="button"
          className={buttonStyle}
          disabled={status !== "Accepted"}
          onClick={() => changeRequestStatus("Returned", bookId)}
        >
          {status === "Accepted" ? "Return" : status}
        </button>
      </div>
    </div>
  );
};
export default MyBooksListItem;
