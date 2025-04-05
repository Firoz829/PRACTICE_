import RestaurantCard from "./Restaurantcard";
import reslist from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("body");
  // console.log(listOfRestaurants); // Check the data structure

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //console.log(json);
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering - Rendering on the basis of Condition
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! please check the Internet Connection</h1>
    );

  const { isLoggedUser, setLoggedinInfo } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between py-[15px]">
        <div className="search p-2.5">
          <input
            type="text"
            className="search-box h-[30px] w-[200px] rounded-[20px] border-0 px-[15px] py-[5px] font-medium shadow-[0px_0px_5px_5px_rgba(160,152,152,0.274)]"
            placeholder="Search your Restaurant & Dish..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-[10px] shadow-md transition-all duration-200"
            onClick={() => {
              //filter there scarts and update the ui
              const searchdata = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(searchdata);
              // console.log("hello" + searchText);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label htmlFor="username">Username :</label>
          <input
            id="username"
            className="search-box"
            placeholder="username"
            type="text"
            value={isLoggedUser}
            onChange={(e) => {
              setLoggedinInfo(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="filter-btn bg-[rgb(255,60,0)] text-white border-none rounded-[20px] p-[10px_20px] cursor-pointer font-semibold text-[15px] hover:shadow-[0px_0px_5px_5px_rgba(63,58,58,0.13)] hover:scale-105 transition-all ease-linear duration-[0.85ms]"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log("4");
            // Use this to update filtered list
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
      {/* {console.log(filteredRestaurant)} */}
    </div>
  );
};

export default Body;
