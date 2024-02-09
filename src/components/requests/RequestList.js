import styles from "./RequestList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequests } from "../../store/RequestsReducer";
import React, { Suspense, useCallback, useEffect, useMemo } from "react";
import { getAllBooks } from "../../store/BooksReducer";
import EmptyList from "../ui/empty-elements/EmptyList";
import LoadingIndicator from "../ui/loading-indicator/LoadingIndicator";
import { Status } from "../../utils/Enums";

const LazyRequestListItem = React.lazy(() => import("./RequestListItem"));

const RequestList = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.request.requests);

  // filtering books for all which request are present and pending
  const pendingRequests = useMemo(
    () => requests.filter((request) => request.status === Status.PENDING),
    [requests]
  );

  const fetchAllBooks = useCallback(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const fetchAllRequests = useCallback(() => {
    dispatch(getAllRequests());
  }, [dispatch]);

  useEffect(() => {
    fetchAllBooks();
    fetchAllRequests();
  }, [fetchAllBooks, fetchAllRequests]);

  const requestList = pendingRequests.map((request) => {
    return (
      <Suspense key={request.created_at} fallback={<LoadingIndicator/>}>
        <LazyRequestListItem request={request} />
      </Suspense>
    );
  });

  return pendingRequests.length === 0 ? (
    <EmptyList message="No Requests" />
  ) : (
    <ul className={styles["request-list"]}>{requestList}</ul>
  );
};
export default RequestList;
