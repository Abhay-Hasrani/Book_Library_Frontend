import { useEffect } from "react";
import Book from "./Book";
import styles from "./BookList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../store/BooksReducer";
import EmptyList from "../../ui/empty-elements/EmptyList";

// "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVzWzrz-HW9e1PjQ_vPrZmWKgkrf2OQyg3qf6J4zBTlt82BF_s"

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const bookList = books.map((book) => {
    return (
      <li key={book.id} className="m-2">
        <Book book={book} />
      </li>
    );
  });
  return bookList.length === 0 ? (
    <EmptyList message="No Books Available!!!" />
  ) : (
    <ul className={styles["book-list"]}>{bookList}</ul>
  );
};

export default BookList;
