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
import PageinationPage from "../components/PageinationPage";

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
console.log(titles)
  const titlesValue = useMemo(() => titles, [titles]);
  

  return(
    <Wrapper>
    <h1>Profile App</h1>
    <Filters
    titles = {titlesValue}
    title = {title} 
    search = {search}
    handleClear = {handleClear}
    handleSearchChange = {handleSearchChange}
    handleTitleChange = {handleTitleChange}
    />
      <div className = {styles["profile-wrapper"]}>
        {profiles.map((profile) => (
        <Link to = {`/profile/${profile.id}`} key = {profile.id}>
        <Card {...profile} />
        </Link>
        ))}
      </div>
      <PageinationPage count = {count} page = {page} dispatch = {dispatch} />
    </Wrapper>
  );
};

export default HomePage
