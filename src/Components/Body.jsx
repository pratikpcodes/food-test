import React, { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "./constants";
import { data } from "autoprefixer";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import ShimmerUI from "./ShimmerUI";
import SearchButton from "./searchButton";
import SearchContext from "./contexts/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Store/userSlice";

function Body() {
  const dispatch = useDispatch();
  let [finalData, setFinalData] = useState([]);
  let [demo, setdemo] = useState([]);
  const [click, setclick] = useState(demo);
  // const [buttonData, setbuttonData] = useState("");
  //// array dena tha
  // const handleButtonData = (data) => {
  //   setbuttonData(data);
  // };

  const { searchTxt, setsearchTxt } = useContext(SearchContext);
  useEffect(() => {
    getResData();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     console.log("body:::::")
    //     console,log(user)
    //     const { uid, email, displayName } = user;
    //     dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    //     // ...
    //   } else {
    //     // User is signed out

    //     dispatch(removeUser());
    //     // ...
    //   }
    // });
  }, []);

  // const fetchData = async () => {

  //   const apiData = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const data = await apiData.json();
  //   console.log(
  //     data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
  //       .info.name
  //   );
  //   setfirst(
  //     data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
  //       .info.name
  //   );
  // };

  async function getResData() {
    try {
      const apiData = await fetch(API_URL);

      const jData = await apiData.json();

      let checkedData;

      async function checkData(jData) {
        for (let index = 2; index < jData?.data?.cards.length; index++) {
          checkedData =
            jData?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkedData !== undefined) return checkedData;
        }
      }
      const resData = await checkData(jData);

      setFinalData(resData);
      setdemo(resData);
    } catch (error) {
      console.log("ERROR OCCURED:::FETCH:::", error.message);
    }
  }
  const dummy = "helo";
  const handlefilterClick = () => {
    setclick(!click);
    if (click) {
      let filtered = demo.filter((index) => index.info.avgRatingString > 4);

      setFinalData(filtered);
    }
    if (!click) {
      setFinalData(demo);
    }
  };
  // console.log(finalData);

  const handlefilterClick2 = () => {
    let filtered2 = demo.filter((index) =>
      index.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    // console.log(filtered2);
    setFinalData(filtered2);
    if (searchTxt.length == 0) setFinalData(demo);
  };
  // console.log(searchTxt + "from body.jsx");

  return (
    <div class=" relative  w-full  h-full justify-center items-center opacity-90  transition duration-1000 ease-in-out hover:opacity-110">
      <div className="mx-auto  ">
        <div className="items-center justify-between flex  ">
          <button
            className="flex transition-transform mx-20 transform hover:scale-105 items-center justify-center text-black hover:text-cyan-800 object-cover rounded-full text-3xl "
            onClick={handlefilterClick}
          >
            &#9733; 
            <h1 className="text-xl">4.0</h1>
          </button>
          <div className="flex mx-10">
            <SearchButton />

            <button
              className="transition-transform transform hover:scale-105 mx-2 text-yellow hover:text-cyan-800 object-cover rounded-full text-xl fas fa-search"
              onClick={handlefilterClick2}
            ></button>
          </div>
        </div>

        <div>
          {finalData.length == 0 ? (
            <ShimmerUI />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {finalData.map((index) => {
                return (
                  <Link to={"/restaurants/" + index?.info?.id}>
                    <ItemCard key={index?.info?.id} {...index?.info} />{" "}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
//
