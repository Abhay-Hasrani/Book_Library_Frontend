import { useNavigate } from "react-router-dom";
import styles from "./RequestListItem.module.css";
import axios from "axios";
import BookUrls from "../../utils/BookUrl";
import React, { useCallback, useState } from "react";
import { formatDateTime } from "../../utils/DateTimeConverter";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/BooksReducer";

const RequestListItem = (props) => {
  const request = props.request;
  const navigate = useNavigate();

  const request_id = request.id;
  const book_id = request.book_id;
  const user_id = request.user_id;
  const user = request.user;

  const book = useSelector(selectBookById(book_id));
  //0: show both accept and reject
  //1: show only accepted
  //2: show only rejected
  const [showButtonTag, setShowButtonTag] = useState(0);

  function detailsClickHandler() {
    navigate(`/books/${book.id}`);
  }

  /**
   *
   * @param {String} new_status - New Status for the book request
   * Also reuires user_id and book_id
   * Changes the status to ("Accepted","Rejected","Pending","Returned") in the database
   */
  const changeRequestStatus = useCallback(
    async (new_status) => {
      try {
        const requestData = {
          id: request_id,
          book_id: book_id,
          user_id: user_id,
          status: new_status,
        };
        await axios.put(BookUrls.PUT_REQUEST_STATUS_URL, requestData);
      } catch (error) {
        console.log(error.message);
      }
    },
    [book_id, user_id,request_id]
  );

  const acceptClickHandler = useCallback(() => {
    changeRequestStatus("Accepted");
    setShowButtonTag(1);
  }, [changeRequestStatus]);

  const rejectClickHandler = useCallback(() => {
    changeRequestStatus("Rejected");
    setShowButtonTag(2);
  }, [changeRequestStatus]);

  return (
    user &&
    book && (
      <li key={request.created_at} className="m-2">
        <div className={styles.wrapper}>
          <div className={styles["book-text"]}>
            <h1>{book.title}</h1>
            <h2>
              by {book.author}
              <br />
              <span>{book.launched}</span>
            </h2>
            <div className={styles["user-detail"]}>
              {` Sent by : ${user.username}`}
              <br />
              {` Received : ${formatDateTime(request.created_at)}`}
              <br />
              {` Updated : ${formatDateTime(request.updated_at)}`}
            </div>
          </div>
          <div className={styles["book-btn-box"]}>
            {showButtonTag !== 2 && (
              <button
                type="button"
                className={
                  showButtonTag === 1
                    ? styles["accept-active"]
                    : styles["accept"]
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
                  showButtonTag === 2
                    ? styles["reject-active"]
                    : styles["reject"]
                }
                onClick={rejectClickHandler}
              >
                {showButtonTag === 2 ? "Rejected" : "Reject"}
              </button>
            )}
          </div>
        </div>
      </li>
    )
  );
};
export default React.memo(RequestListItem);
