// The fetch and reduce functions from mod 7 are moved to a custom hook called useDataFetcher. 
// This hook takes a URL as an argument and returns the data, loading, and error state. 
// The hook uses the useEffect hook to fetch the data from the URL and the useReducer hook to manage the state of the data.
// The reducer function is defined inside the useDataFetcher hook and is used to update the state based on the action type.
import { useEffect, useReducer } from "react";
import axios from "axios";

function useDataFetcher(url) {
  const [dataResult, dispatch] = useReducer(reducer, {
    loading: true,
    data: [],
    error: "",
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, [url]);

  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { loading: false, data: action.payload, error: "" };
      case "FETCH_ERROR":
        return { loading: false, data: [], error: action.payload };
      default:
        return state;
    }
  }

  return dataResult;
}

export default useDataFetcher;
