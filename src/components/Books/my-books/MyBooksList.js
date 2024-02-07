import { useDispatch } from "react-redux";
import MyBooksListItem from "./MyBooksListItem";
import styles from "./MyBooksList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookUrls from "../../../utils/BookUrl";
import EmptyList from "../../ui/empty-elements/EmptyList";

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

  const myBookList = myRequests.map((request, index) => {
    return (
      <li key={index} className="m-2">
        <MyBooksListItem request={request} />
      </li>
    );
  });

  return myBookList.length === 0 ? (
    <EmptyList message="You dont have any Books!!!" />
  ) : (
    <ul className={styles["my-book-list"]}>{myBookList}</ul>
  );
};
export default MyBooksList;
