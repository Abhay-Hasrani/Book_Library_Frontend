import { useParams } from "react-router-dom";
import Rating from "../../UI/RatingElements/Rating";
import styles from "./BookDetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import LoadingIndicator from "../../UI/loading-indicator/LoadingIndicator";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookByID = async (bookId) => {
      const res = await axios.get(BookUrls.BOOK_URL + bookId);
      setBook(res.data);
    };
    getBookByID(bookId);
  }, [bookId]);

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
        <button className={styles["book-add-btn"]} type="button">
          Request
        </button>
        <div className={styles.available}>(5 left)</div>
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
