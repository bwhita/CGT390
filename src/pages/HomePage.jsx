import Card from "../components/Card";
import Wrapper from "../components/wrapper";
import { useCallback, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import { initialState, homeReducer } from "../reducers/homeReducer";
import useHomepageAPI from "../hooks/homepageAPI";
import Filters from "../components/Filters"
import { useMemo } from "react";

const HomePage = () => {

  const { state, dispatch } = useHomepageAPI();
  const { titles, title, search, profiles, page, count } = state;


  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value);
    setPage(1);
  }, []);

  const handleTitleChange = useCallback((event) => {
    dispatch({ type: "SET_TITLE", payload: event.target.value});
  }, []);

  const handleClear = useCallback(() => {
    dispatch({ type: "CLEAR_FILTERS" })
  }, []);

  const titlesValue = useMemo(() => titles, {titles});
  

  return(
    <Wrapper>
    <h1>Profile App</h1>
    <Filters
    titles = {titles}
    title = {title} 
    search = {search}
    handleClear = {handleClear}
    handleSearchChange = {handleSearchChange}
    handleTitleChange = {handleTitleChange}
    />

      
      {
        count === 0 && <p>No profiles found!</p>
      }
      {count > 10 && (
        <div className = {styles["pagination"]}>
        <button onClick={() => dispatch({type: "SET_PAGE", payload: page - 1 })} disabled={page === 1}>
          <span className="sr-only">Previous</span>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        <span>
          {page}/{math.ceil(count/10)}
          </span>
        <button onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1})} 
        disabled={page >= Math.ceil(count/10)}>
          <span className="sr-only">Next</span>
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
      </div>
      )}
      
    </Wrapper>
  );
};

export default HomePage
