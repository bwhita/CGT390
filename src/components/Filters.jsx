import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/home.module.css";
import { useRef, useEffect, memo } from 'react';


const Filters = memo(({titles, title, search, handleClear, handleSearchChange, handleTitleChange}) => {
    
    const buttonStyle = {
        border: "1px solid #ccc",
      };

    const renderCounter = useRef (0);
    useEffect (() => {
        renderCounter.current = renderCounter.current + 1;
        console.log("Filter rendered", renderCounter.current);
    });

    return(
        <div className = {styles["filter-wrapper"]}>
        <div className = {styles["filter--select"]}>
            <label htmlFor = "title-select">Select a title:</label>
            <select
                id="title-select"
                    onChange = {handleTitleChange}
                    value = {title}
                    >
                      <option value = "">All</option>
                      {titles.map((title) => (
                        <option key = {title} value = {title}>
                          {title}
                        </option>
                      ))}
                    </select>
        </div>
                <div className = {styles["filter--search"]}>
                  <label  htmlFor = "search">Search by name:</label>
                  <input
                  type = "text"
                  id = "search"
                  onChange = {handleSearchChange}
                  value = {search}
                  />
                </div>
                <div className = {styles["profile-wrapper"]}>
                      {profiles.map((profile) => (
                        <Link to = {`/profile/${profile.id}`} key = {profile.id}>
                          <Card {...profile} />
                          </Link>
                      ))}
                </div>
        </div>
    )
});

export default Filters;