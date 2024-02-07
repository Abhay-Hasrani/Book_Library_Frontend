import styles from "./Rating.module.css";
const Rating = (props) => {
  const rating = parseInt(props.rating,10);
  return (
    <div className={styles.rating}>
      <input value="5" name="rating" id="star5" type="checkbox" defaultChecked={rating===5}/>
      <label htmlFor="star5"></label>
      <input value="4" name="rating" id="star4" type="checkbox" defaultChecked={rating===4}/>
      <label htmlFor="star4"></label>
      <input value="3" name="rating" id="star3" type="checkbox" defaultChecked={rating===3}/>
      <label htmlFor="star3"></label>
      <input value="2" name="rating" id="star2" type="checkbox" defaultChecked={rating===2}/>
      <label htmlFor="star2"></label>
      <input value="1" name="rating" id="star1" type="checkbox" defaultChecked={rating===1}/>
      <label htmlFor="star1"></label>
    </div>
  );
};
export default Rating;
