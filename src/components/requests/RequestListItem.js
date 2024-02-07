import { useNavigate } from "react-router-dom";
import styles from "./RequestListItem.module.css";
import axios from "axios";
import BookUrls from "../../utils/BookUrl";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../utils/DateTimeConverter";
import LoadingIndicator from "../ui/loading-indicator/LoadingIndicator";

const RequestListItem = (props) => {
  const bookObj = props.book;
  const navigate = useNavigate();
  const bookId = bookObj.id;
  const user_id = bookObj.user_id;

  //0: show both accept and reject
  //1: show only accepted
  //2: show only rejected
  const [showButtonTag, setShowButtonTag] = useState(0);
  const [user, setUser] = useState(null);

  function detailsClickHandler() {
    navigate(`/books/${bookObj.id}`);
  }

  /**
   *
   * @param {String} new_status - New Status for the book request
   * @param {number} book_id - book_id for which status is to be changed
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
    } catch (error) {
      console.log(error.message);
    }
  };

  const acceptClickHandler = () => {
    changeRequestStatus("Accepted", bookId);
    setShowButtonTag(1);
  };

  const rejectClickHandler = () => {
    changeRequestStatus("Rejected", bookId);
    setShowButtonTag(2);
  };

  useEffect(() => {
    const getUserByID = async (user_id) => {
      const res = await axios.get(BookUrls.USER_URL + user_id);
      setUser(res.data);
    };
    getUserByID(user_id);
  }, [user_id]);

  return !user ? (
    <LoadingIndicator />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles["book-text"]}>
        <h1>{bookObj.title}</h1>
        <h2>
          by {bookObj.author}
          <br />
          <span>{bookObj.launched}</span>
        </h2>
        <div className={styles["user-detail"]}>
          {` Sent by : ${user.username}`}
          <br />
          {` Received : ${formatDateTime(bookObj.requestCreatedAt)}`}
          <br />
          {` Updated : ${formatDateTime(bookObj.requestUpdatedAt)}`}
        </div>
      </div>
      <div className={styles["book-btn-box"]}>
        {showButtonTag !== 2 && (
          <button
            type="button"
            className={
              showButtonTag === 1 ? styles["accept-active"] : styles["accept"]
            }
            onClick={acceptClickHandler}
          >
            {showButtonTag === 1 ? "Accepted" : "Accept"}
          </button>
        )}
        {showButtonTag === 0 && (
          <button type="button" onClick={detailsClickHandler}>
            Details
          </button>
        )}
        {showButtonTag !== 1 && (
          <button
            type="button"
            className={
              showButtonTag === 2 ? styles["reject-active"] : styles["reject"]
            }
            onClick={rejectClickHandler}
          >
            {showButtonTag === 2 ? "Rejected" : "Reject"}
          </button>
        )}
      </div>
    </div>
  );
};
export default RequestListItem;
