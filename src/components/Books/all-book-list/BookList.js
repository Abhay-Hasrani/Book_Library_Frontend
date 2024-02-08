import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../store/BooksReducer";
import EmptyList from "../../ui/empty-elements/EmptyList";
import Book from "./Book";
import styles from "./BookList.module.css";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const [filterText, setFilterText] = useState("");
  
  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Defined a debounced version of setFilterText
  const debouncedSetFilterText = debounce(setFilterText, 300);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const bookList = books
    .filter(
      (book) =>
        filterText === "" ||
        book.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .map((book) => (
      <li key={book.id} className="m-2">
        <Book book={book} />
      </li>
    ));

  return (
    <>
      <div className={styles["search"]}>
        <input
          type="text"
          placeholder="Search By Title"
          onChange={(e) => debouncedSetFilterText(e.target.value)}
        />
      </div>
      {bookList.length === 0 ? (
        <EmptyList message="No Books Available!!!" />
      ) : (
        <ul className={styles["book-list"]}>{bookList}</ul>
      )}
    </>
  );
};

export default BookList;
