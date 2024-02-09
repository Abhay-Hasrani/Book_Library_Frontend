import { Status } from "../../../utils/Enums";
import styles from "./FilterDropdown.module.css"
const FilterDropDown = (props) => {
  return (
    <div className={styles["filter-button"]}>
      <button className={styles["button"]}>
        {props.filter ? props.filter : "No Filter"} &nbsp; ▼
      </button>
      <div className={styles["dropdown-content"]}>
        <a id="top" href="#" onClick={() => props.changeFilter(Status.PENDING)}>
          {Status.PENDING}
        </a>
        <a id="middle" href="#" onClick={() => props.changeFilter(Status.ACCEPTED)}>
          {Status.ACCEPTED}
        </a>
        <a id="middle" href="#" onClick={() => props.changeFilter(Status.REJECTED)}>
          {Status.REJECTED}
        </a>
        <a id="middle" href="#" onClick={() => props.changeFilter(Status.RETURNED)}>
          {Status.RETURNED}
        </a>
        <a id="middle" href="#" onClick={() => props.changeFilter(null)}>
          No Filter
        </a>
      </div>
    </div>
  );
};
export default FilterDropDown;
