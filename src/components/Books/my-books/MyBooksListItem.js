import { useEffect, useState } from "react";
import styles from "./MyBooksListItem.module.css";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import { formatDateTime } from "../../../utils/DateTimeConverter";
import { useNavigate } from "react-router-dom";

const MyBooksListItem = (props) => {
  const myRequest = props.request;
  const [myBook, setMyBook] = useState(null);
  const [status, setStatus] = useState(myRequest.status);
  const navigate = useNavigate();

  const book_id = myRequest.book_id;
  const user_id = myRequest.user_id;

  useEffect(() => {
    const getBookByID = async (book_id) => {
      const res = await axios.get(BookUrls.BOOK_URL + book_id);
      setMyBook(res.data);
    };
    getBookByID(book_id);
  }, [book_id]);

  /**
   *
   * @param {String} new_status  New Status for the book request
   * @param {number} book_id -- book_id for which status is to be changed
   *
   * Changes the status to ("Accepted","Rejected","Pending","Returned") in the database
   */
  const changeRequestStatus = async (new_status, book_id, user_id) => {
    try {
      const requestData = {
        book_id: book_id,
        user_id: user_id,
        status: new_status,
      };
      await axios.put(BookUrls.PUT_REQUEST_STATUS_URL, requestData);
      setStatus("Returned");
    } catch (error) {
      console.log(error.message);
    }
  };

  function detailsClickHandler() {
    navigate(`/books/${book_id}`);
  }

  let buttonStyle = styles["active"];
  if (status === "Accepted") buttonStyle = styles["accepted"];
  else if (status === "Rejected") buttonStyle = styles["rejected"];
  else if (status === "Returned") buttonStyle = styles["returned"];
  else buttonStyle = styles["pending"];

  return (
    myBook && (
      <li key={myRequest.created_at} className="m-2">
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
            <button type="button" onClick={detailsClickHandler}>
              Details
            </button>
            <button
              type="button"
              className={buttonStyle}
              disabled={status !== "Accepted"}
              onClick={() => changeRequestStatus("Returned", book_id, user_id)}
            >
              {status === "Accepted" ? "Return" : status}
            </button>
          </div>
        </div>
      </li>
    )
  );
};
export default MyBooksListItem;
