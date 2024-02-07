import RequestListItem from "./RequestListItem";
import styles from "./RequestList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequests } from "../../store/RequestsReducer";
import { useEffect } from "react";
import { getAllBooks } from "../../store/BooksReducer";

const RequestList = () => {
  const dispatch = useDispatch();
  const allbooks = useSelector((state) => state.book.books);
  const requests = useSelector((state) => state.request.requests);


  // filtering books for all which request are present
  const requestsBookIds = requests.map((request) => request.book_id);
  const booksInRequests = allbooks.filter((book) =>
    requestsBookIds.includes(book.id)
  );

  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getAllRequests());
  }, [dispatch]);

  const requestList = booksInRequests.map((book) => {
    return (
      <li key={Math.random()} className="m-2">
        <RequestListItem book={book} />
      </li>
    );
  });

  return <ul className={styles["request-list"]}>{requestList}</ul>;
};
export default RequestList;
