import { useParams } from "react-router-dom";
import Rating from "../../ui/rating-elements/Rating";
import styles from "./BookDetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import LoadingIndicator from "../../ui/loading-indicator/LoadingIndicator";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../store/RequestsReducer";

const BookDetail = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookByID = async (bookId) => {
      const res = await axios.get(BookUrls.BOOK_URL + bookId);
      setBook(res.data);
    };
    getBookByID(bookId);
  }, [bookId]);

  const requestClickHandler = () => {
    dispatch(postRequest(bookId));
  };

  return !book ? (
    <LoadingIndicator />
  ) : (
    <>
      <div className={styles["book-img"]}>
        <img
          alt={`Book :- ${book.title}`}
          src={book.imageUrl}
          height="420"
          width="327"
        />
        <button
          className={styles["book-add-btn"]}
          type="button"
          onClick={requestClickHandler}
        >
          Request
        </button>
      </div>
      <div className={styles["book-info"]}>
        <div className={styles["book-text"]}>
          <h1>{book.title}</h1>
          <h2>
            by {book.author}
            <br />
            <span>{book.launched}</span>
          </h2>
          <h2>
            <Rating rating={book.rating} />
          </h2>
          <p>{book.description}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
