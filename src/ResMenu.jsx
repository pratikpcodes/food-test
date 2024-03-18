import React from "react";
import { useState } from "react";
import { API_URL, MENU_URL } from "./Components/constants";
import { useEffect } from "react";
import ShimmerUI from "./Components/ShimmerUI";
import dis from "./assets/dis.png";

import { MENU_URL2 } from "./Components/constants";
import { useParams } from "react-router-dom";
import { useId } from "react";
import MenuItemCard from "./Components/MenuItemCard";
function ResMenu() {
  let offerid = useId();
  const [menu, setmenu] = useState(null);
  const [vegOnly, setvegOnly] = useState("");
  const { resId } = useParams();
  useEffect(() => {
    getMenuData();
  }, []);
  if (menu == null) return <ShimmerUI />;

  async function getMenuData() {
    const data = await fetch(
      MENU_URL2 + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jData = await data.json();

    setmenu(jData);
  }
  const {
    name,
    city,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
    id,
    locality,
    areaName,
    sla,
    avgRatingString,
    aggregatedDiscountInfo,
    totalRatingsString,
  } = menu?.data?.cards[0].card.card.info;
  // console.log(menu?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
  const { itemCards } =
    menu?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(avgRatingString);
  console.log(menu.data.cards[0].card.card.info);
  // console.log(aggregatedDiscountInfo.descriptionList);
  // console.log(menu.data.cards[0].card.card.info)
  // console.log(itemCards[0].card.info.name);
  // console.log(menu.data.cards[1].card.card.gridElements.infoWithStyle.offers[0].info.header)
  const { offers } = menu?.data?.cards[1].card.card.gridElements.infoWithStyle;
  // console.log(menu?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name)
  // console.log(menu?.data?.cards)
  const card2 =
    menu?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (index) =>
        index.card.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(card2[0].card.card.itemCards)
  // console.log(card2[0].card.card.itemCards[0].card.info.name);
  // console.log(card2[0].card.card.itemCards[1].card.info.name);
  // console.log(card2);

  ///

  return (
    <>
      {/* <div>
        this is menu item card :::::::::::::::::
        <MenuItemCard card2={card2} />
      </div> */}

      {/* <div className="font-bold">
        {card2.map((index) => (
          <>
            <div>{index.card.card.title}</div>

            <div className="menu card items font-normal ">
               {index.card.card.itemCards[0].card.info.name} 
              {index.card.card.itemCards.map((index) => (
                <div>{index.card.info.name}</div>
              ))}
            </div>
          </>
        ))}
      </div> */}

      <div className=" container m-auto ">
        <div className=" items-center justify-center m-20">
          <div className="flex justify-between ">
            <h1 className="font-bold text-xl m-0 p-0">{name}</h1>
            <h2 className="font-bold text-xl mr-6 p-0 ">
              {avgRatingString} &#9733;
            </h2>
          </div>
          <div className="flex justify-between">
            <h1 className=" text-gray-500 text-sm m-0 p-0">{cuisines}</h1>
            <h1 className=" text-gray-500 text-sm mr-5 p-0">
              {totalRatingsString}
            </h1>
          </div>
          <h3 className=" text-gray-500 text-sm m-0 p-0">
            {city + "," + locality}
          </h3>

          {/* {"RES ID:" + id} */}
          <h1 className=" text-gray-500 text-sm mt-5 p-0">
            {areaName + " " + sla?.lastMileTravelString}
          </h1>
          {/* <h2>{cloudinaryImageId}</h2> */}
          <div className=" 30mins mt-10 flex items-center">
            <svg
              className="mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M16,16H7.995C7.445,16,7,15.555,7,15.005v-0.011	C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011C15.555,5,16,5.445,16,5.995V16z"></path>
            </svg>

            <h2 className=" font-bold mr-10 ">
              {sla.slaString}
              {" MINS"}
            </h2>

            <h2 className=" font-bold ml-2 "> {costForTwoMessage}</h2>
          </div>

          <div className="Discount mt-10 flex items-center text-gray-500">
            {/* {aggregatedDiscountInfo.descriptionList.map((item) => (
              <>
                <img
                  className=" object-cover w-6 h-6 m-0 p-0"
                  src={dis}
                  alt=""
                />
                <h2 className="mr-4 font-bold ">{item.meta}</h2>
              </>
            ))} */}

            {offers?.map((item) => (
              <div>
                <img
                  className=" object-cover w-6 h-6 m-0 p-0"
                  src={dis}
                  alt=""
                />
                <h2 className="mr-4 font-bold ">{item.info.header}</h2>
              </div>
            ))}
          </div>
        </div>

        <MenuItemCard card2={card2} />
      </div>
    </>
  );
}

export default ResMenu;
