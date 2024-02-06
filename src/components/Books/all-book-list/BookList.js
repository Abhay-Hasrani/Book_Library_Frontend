import { useEffect } from "react";
import Book from "./Book";
import styles from "./BookList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../store/BooksReducer";
import axios from "axios";

// "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVzWzrz-HW9e1PjQ_vPrZmWKgkrf2OQyg3qf6J4zBTlt82BF_s"
// "http://bit.ly/2tMBBTd"

const BookList = () => {
  const dispatch = useDispatch();
  const myToken = useSelector((state) => state.auth.token);
  const books = useSelector((state) => state.book.books);

  //set the deafult header Authorisation so as to not to put it again
  axios.defaults.headers.common["Authorization"] = "Bearer " + myToken;

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
  return <ul className={styles["book-list"]}>{bookList}</ul>;
};

export default BookList;
