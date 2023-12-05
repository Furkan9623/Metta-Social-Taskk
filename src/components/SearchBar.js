import SearchIcon from "@mui/icons-material/Search";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";
import fetchApiCall from "../api/my-api";
import Spinner from "./Spinner";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const result = await fetchApiCall(searchQuery);
    if (result?.status === 200) {
      let newArray = result?.data?.map((elem) => {
        return {
          id: Math.floor(Math.random() * 9000 + 1000),
          flag: elem?.flags?.png,
          name: elem?.name?.common,
          capital: elem?.capital,
        };
      });
      setCountry(newArray);
    } else {
      setError(result?.response?.data?.message);
    }
    setLoading(false);
  };
  console.log(country);
  useEffect(() => {
    if (searchQuery) {
      fetchData();
    } else {
      setCountry([]);
      setError("");
    }
  }, [searchQuery]);

  const Debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value.toUpperCase());
  };
  console.log("loading", loading);
  const magicFunction = Debounce(handleChange, 600);
  return (
    <div id="parent">
      <div id="search-bar">
        <SearchIcon />
        <input
          type="Search"
          placeholder="Search By currency INR, EUR"
          onChange={magicFunction}
        />
      </div>
      <div id="card-parent-container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {country?.length > 0 ? (
              <>
                {country.map((elem) => {
                  console.log(elem);
                  return <SingleCard elem={elem} />;
                })}
              </>
            ) : error ? (
              <img
                src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
                alt=""
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1634757439914-23b8acb9d411?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
