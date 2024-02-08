import { useDispatch } from "react-redux";
import styles from "./MyBooksList.module.css";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import EmptyList from "../../ui/empty-elements/EmptyList";
import LoadingIndicator from "../../ui/loading-indicator/LoadingIndicator";

const LazyRequestListItem = React.lazy(() => import("./MyBooksListItem"));

const MyBooksList = () => {
  const dispatch = useDispatch();
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    const getMyRequests = async () => {
      try {
        const res = await axios.get(BookUrls.MY_REQUESTS_URL);
        setMyRequests(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyRequests();
  }, [dispatch]);

  const myBookList = myRequests.map((request) => {
    return (
      <Suspense key={request.created_at} fallback={<LoadingIndicator />}>
        <LazyRequestListItem request={request} />
      </Suspense>
    );
  });

  return myBookList.length === 0 ? (
    <EmptyList message="You dont have any Books!!!" />
  ) : (
    <ul className={styles["my-book-list"]}>{myBookList}</ul>
  );
};
export default MyBooksList;
