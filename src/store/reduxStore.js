import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import BooksReducer from "./BooksReducer";

const store = configureStore({
  reducer: { auth: AuthReducer, book: BooksReducer },
});
export default store;
