import { memo } from "react";
import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PaginationPage = ({ count, page, dispatch }) => {
  return(
    <>
      {count === 0 && <p>No profiles found!</p>}
      {count > 10 && (
        <div className = {styles["pagination"]}>
        <button onClick={() => dispatch({type: "SET_PAGE", payload: page - 1 })} disabled={page === 1}>
          <span className="sr-only">Previous</span>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        <span>
          {page}/{Math.ceil(count/10)}
          </span>
        <button onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1})} 
        disabled={page >= Math.ceil(count/10)}>
          <span className="sr-only">Next</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        </div>
      )}
    </>
  )
}

export default memo(PaginationPage);