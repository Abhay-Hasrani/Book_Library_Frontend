import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BookUrls from "../utils/BookUrl";

const initialState = {
  books: [],
};

const BooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    replaceBooks: (state, action) => {
      state.books = action.payload.books;
    },
    addBook: (state, action) => {
      state.books = [action.payload.book, ...state.books];
    },
  },
});

// Async action creators Reduxx thunk

/**
 * Fetches all books and add to redux state
 * */
export const getAllBooks = () => async (dispatch) => {
  const res = await axios.get(BookUrls.BOOKS_URL);
  dispatch(booksActions.replaceBooks({ books: res.data }));
};

/**
 * Add book to the backend->database and add to redux state
 * */
export const postBook = (book) => async (dispatch) => {
  const res = await axios.post(BookUrls.POST_BOOK_URL, book);
  dispatch(booksActions.addBook({ book: res.data.book }));
};

export const booksActions = BooksSlice.actions;

export default BooksSlice.reducer;
