import styles from "./Book.module.css";
import Rating from "../../UI/RatingElements/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRequest } from "../../../store/RequestsReducer";
const Book = (props) => {
  const bookObj = props.book;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function detailsClickHandler() {
    navigate(`/books/${bookObj.id}`);
  }

  const requestClickHandler = () => {
    dispatch(postRequest(bookObj.id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["book-img"]}>
        <img
          alt={`Book :- ${bookObj.title}`}
          src={bookObj.imageUrl}
          height="420"
          width="327"
        />
      </div>
      <div className={styles["book-info"]}>
        <div className={styles["book-text"]}>
          <h1>{bookObj.title}</h1>
          <h2>
            by {bookObj.author}
            <br />
            <span>{bookObj.launched}</span>
          </h2>
          <p>{bookObj.description}</p>
        </div>
        <div className={styles["rating-box"]}>
          <Rating rating={bookObj.rating} />
        </div>
        <div className={styles["book-btn-box"]}>
          <button type="button" onClick={detailsClickHandler}>
            Details
          </button>
          <button type="button" onClick={requestClickHandler}>
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
