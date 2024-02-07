import RequestListItem from "./RequestListItem";
import styles from "./RequestList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequests } from "../../store/RequestsReducer";
import { useEffect } from "react";
import { getAllBooks } from "../../store/BooksReducer";
import EmptyList from "../ui/empty-elements/EmptyList";

const RequestList = () => {
  const dispatch = useDispatch();
  const allbooks = useSelector((state) => state.book.books);
  const requests = useSelector((state) => state.request.requests);

  // console.log(allbooks)
  // console.log(requests)
  // filtering books for all which request are present and pending
  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  );
  const booksInRequests = pendingRequests.map((_request) => {
    return allbooks
      .filter((book) =>
        pendingRequests.some((request) => request.book_id === book.id)
      )
      .map((book) => ({
        ...book,
        user_id: _request.user_id,
        requestCreatedAt: _request.created_at,
        requestUpdatedAt: _request.updated_at,
      }));
  });

  useEffect(() => {
    dispatch(getAllBooks());
    dispatch(getAllRequests());
  }, [dispatch]);

  const requestList = booksInRequests.map((book) => {
    return (
      <li key={Math.random()} className="m-2">
        <RequestListItem book={book[0]} />
      </li>
    );
  });

  return requestList.length === 0 ? (
    <EmptyList message="No Requests" />
  ) : (
    <ul className={styles["request-list"]}>{requestList}</ul>
  );
};
export default RequestList;
