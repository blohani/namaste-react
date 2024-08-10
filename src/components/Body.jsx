/* eslint-disable react/react-in-jsx-scope */
import React, { useContext } from "react";
import { RestCard } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

// import { restList } from "./../utils/MockData.js";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const RestCrdWithPromotedLabel = withPromotedLabel(RestCard);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(
      // "https://www.zomato.com/webroutes/getPage?page_url=/ncr/insta-worthy&location=&isMobile=0"
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // const restApiData = data?.page_data?.sections?.SECTION_ENTITIES_DATA; // Zomato API
    const restApiData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; // Swiggy API

    setResList(restApiData);
    setFilteredRes(restApiData);
    // console.log("restApiData", restApiData);
  }

  const myOnlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!myOnlineStatus) {
    return <h1>Your internet connection is offline...</h1>;
  }

  if (resList.length === 0) {
    return <Shimmer />;
  }

  const changeUsername = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="body">
      <div className="flex">
        <div className="px-8">
          <input
            name="search"
            id="search"
            data-testid="searchInput"
            className="m-2 p-2 border"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="search..."
          />
          <button
            className="bg-slate-300 p-2 rounded"
            onClick={() => {
              let searchedList = resList.filter(
                (rest) =>
                  // rest.name.toLowerCase().includes(searchValue.toLowerCase()) // Zomato API
                  rest.info?.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) // Swiggy API
              );
              setFilteredRes(searchedList);
              // console.log("searchedList", searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-8 m-4">
          <button
            className="filter-btn bg-slate-300 p-1 rounded"
            onClick={() => {
              let filteredRest = resList.filter((rest) => {
                // return rest.rating?.aggregate_rating < 4; // Zomato API
                return rest.info?.avgRating < 4.3; // Swiggy API
              });
              setFilteredRes(filteredRest);
              // console.log("filteredRest", filteredRest);
            }}
          >
            Filter Restaurants
          </button>
          <p className="m-2">
            UserName:{" "}
            <input
              onChange={changeUsername}
              className="m-2 p-2 border"
              type="text"
            />
          </p>
        </div>
      </div>
      <div className="rest-container flex flex-wrap">
        {filteredRes.map((rest) => (
          // eslint-disable-next-line react/jsx-key
          <Link to={"/restaurant/" + rest?.info?.id}>
            {/* Restaurant Card with promoted label on it */}
            {rest?.info?.parentId == "61955" ? (
              <RestCrdWithPromotedLabel key={rest?.info?.id} resData={rest} />
            ) : (
              <RestCard key={rest?.info?.id} resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
