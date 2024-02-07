import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import BooksReducer from "./BooksReducer";
import RequestsReducer from "./RequestsReducer";

const store = configureStore({
  reducer: { auth: AuthReducer, book: BooksReducer, request: RequestsReducer },
});
export default store;
