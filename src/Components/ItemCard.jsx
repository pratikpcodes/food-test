import React from "react";
import { IMG_URL } from "./constants";
function ItemCard({
  id,
  name,
  cloudinaryImageId,
  locality,
  areaName,
  costForTwo,
  cuisines,
  avgRatingString,
  totalRatingsString,
}) {
  return (
    <div className="m-2 transition-transform transform hover:scale-105 ">
      <div className=" Image:: flex items-center justify-center  rounded-2xl ">
        <img
          className="object-cover w-80 h-64 rounded-xl "
          src={IMG_URL + cloudinaryImageId}
          alt="SWIGGY"
        />
      </div>


      <div className="flex   items-center justify-center">
        <h1 className="text-lg font-semibold mb-2  items center">{name}</h1>
      </div>

      <div className=" flex items-center  ">
        <div className="w-3/4">
          <h2 className="font-bold text-md mx-4">
            {avgRatingString + "  " + totalRatingsString}
          </h2>
          <h3 className="text-gray-700 text-sm mx-4">
            {locality + "  " + areaName}
          </h3>
        </div>
        <div className="m-0 p-0 w-1/4">
          <h4 className="text-gray-900 font-bold text-sm ">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
