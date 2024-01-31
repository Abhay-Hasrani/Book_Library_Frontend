import { useParams } from "react-router-dom";
import Rating from "../../UI/RatingElements/Rating";
import styles from "./BookDetail.module.css";
const BookDetail = () => {
  const { bookId } = useParams();

  const book = {
    bookId: 2,
    imageUrl: "http://bit.ly/2tMBBTd",
    title: "To Kill a Mockingbird",
    description:
      "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
    author: "Harper Lee",
    launched: "July 11, 1960",
    rating: 4.5,
  };
  return (
    // <div className={styles.wrapper}>
    <>
      <div className={styles["book-img"]}>
        <img
          alt={`Book :- ${book.title}`}
          src={book.imageUrl}
          height="420"
          width="327"
        />
        <button className={styles["book-add-btn"]} type="button">
          Add
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
    // </div>
  );
};

export default BookDetail;
