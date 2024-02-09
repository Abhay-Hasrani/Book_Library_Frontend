import { useDispatch } from "react-redux";
import styles from "./MyBooksList.module.css";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import EmptyList from "../../ui/empty-elements/EmptyList";
import LoadingIndicator from "../../ui/loading-indicator/LoadingIndicator";
import { Status } from "../../../utils/Enums";
import FilterDropDown from "../../ui/filter-elements/FilterDropdown";

const LazyRequestListItem = React.lazy(() => import("./MyBooksListItem"));

const MyBooksList = () => {
  const dispatch = useDispatch();
  const [myRequests, setMyRequests] = useState([]);
  const [filter, setFilter] = useState(null);

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

  const myBookList = myRequests
    .filter((request) => filter === null || filter == request.status)
    .map((request) => {
      return (
        <Suspense key={request.created_at} fallback={<LoadingIndicator />}>
          <LazyRequestListItem request={request} />
        </Suspense>
      );
    });

  const changeFilter = (status) => {
    setFilter(status);
  };

  return (
    <>
     <FilterDropDown filter={filter} changeFilter={changeFilter}/>
      {myBookList.length === 0 ? (
        <EmptyList message="You dont have any Books!!!" />
      ) : (
        <ul className={styles["my-book-list"]}>{myBookList}</ul>
      )}
    </>
  );
};
export default MyBooksList;
