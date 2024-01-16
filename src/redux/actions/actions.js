export const ADD_TO_FAVOURITE = "ADD_TOFAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOB = "GET_JOB";
import { axios } from "axios";

const addToFavourite = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
};

const removeToFavourite = () => {
  return {
    type: REMOVE_FROM_FAVOURITE,
  };
};

const getJob = () => {
  return {
    type: GET_JOB,
  };
};

// Action Speciale
export const fetchData = () => {
  return (dispatch) => {
    dispatch(addToFavourite());
    axios
      .get("https://strive-benchmark.herokuapp.com/api/jobs?search=")
      .then((response) => {
        const data = response.data;
        dispatch(removeToFavourite(data));
      })
      .catch((error) => {
        dispatch(getJob(error.message));
      });
  };
};
