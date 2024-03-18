import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Store/cartSlice";
function MenuItemCard(card2) {
  const itemCard = card2.card2;
  const [activebtn, setactivebtn] = useState();
  const [vegOnly, setvegOnly] = useState(false);

  const [toggle, settoggle] = useState();
  //   console.log(itemCard);
  const dispatch = useDispatch();
  const CartDispatch = ({ info }) => {
    dispatch(addItem(info));
  };

  return (
    <div className="  ">
      <div className="flex  justify-between items-center ">
        <button onClick={(e) => setvegOnly(!vegOnly)}>
          <img
            className=" object-cover w-5 h-5"
            src="https://img.icons8.com/?size=48&id=61082&format=png"
            alt="helo"
          />
          non-Veg
        </button>
      </div>
      {itemCard.map((index) => (
        // here index =item and not actual index
        <div className=" font-bold text-gray-600 border  w-auto h-auto m-10  ">
          <div className="font-bold text-2xl 0 flex justify-between ">
            <div className=" flex items-center ">
              {index.card.card.title}
              {/* {console.log(index.card.card.itemCards.length)} */}

              <h1 className="ml-5 text-lg ">
                {"(" + index.card.card.itemCards.length + ")"}{" "}
              </h1>
            </div>

            <button
              onClick={() => {
                setactivebtn(index.card.card.title);

                if (activebtn == index.card.card.title) settoggle(!toggle);
                else settoggle(true);
              }}
            >
              <img
                className="w-6 h-6  "
                src="https://cdn-icons-png.flaticon.com/128/566/566015.png"
                alt="helo"
              />
            </button>

            {/* {console.log(activebtn)} */}
          </div>

          {/* {console.log(index.card.card)} */}
          {/* bcccc logic bana diya of toggle hurray xd :)*/}
          {activebtn == index.card.card.title && toggle == true ? (
            <>
              {vegOnly == false ? (
                <div>
                  {index.card.card.itemCards.map((index) => (
                    <div className="mt-5 flex justify-between items-center">
                      <div className=" w-full">
                        {index?.card?.info.name.includes("Chicken") == true ? (
                          <div>
                            <img
                              className=" object-cover w-5 h-5"
                              src="https://img.icons8.com/?size=48&id=61082&format=png"
                              alt="helo"
                            />
                          </div>
                        ) : (
                          <div>
                            <img
                              className=" object-cover w-5 h-5"
                              src="https://img.icons8.com/?size=48&id=61083&format=png"
                              alt="helo"
                            />
                          </div>
                        )}

                        {index.card.info.name}

                        <div className="font-normal">
                          <h1>
                            {"₹ " + Math.floor(index?.card?.info.price / 100)}{" "}
                          </h1>
                          <h1>{index?.card?.info.description}</h1>
                        </div>
                      </div>
                      {/* image*/}

                      <div className=" relative">
                        <img
                          className="m-0 p-2 w-100 h-100 rounded-sm "
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                            index?.card?.info.imageId
                          }
                          alt="helo"
                        />

                        <button
                          className=" bg-black  transition-transform transform hover:scale-75 rounded-md text-white w-40  scale-90  absolute bottom-0 left-1/2  -translate-x-1/2 -translate-y-1/2 "
                          onClick={() => {
                            CartDispatch(index.card);
                          }}
                        >
                          Add to cart +
                        </button>
                        {console.log(index.card.info.name)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {index.card.card.itemCards.map((index) => (
                    <div className="mt-5 flex justify-between items-center">
                      {index?.card?.info?.name.includes("Chicken") == true ? (
                        <div className="flex justify-between  w-full">
                          <div>
                            <img
                              className=" object-cover w-5 h-5"
                              src="https://img.icons8.com/?size=48&id=61082&format=png"
                              alt="helo"
                            />
                            {index.card.info.name}

                            <h1>
                              {"₹ " + Math.floor(index?.card?.info.price / 100)}
                            </h1>

                            <h1> {index?.card?.info.description}</h1>
                          </div>

                          <div className=" img object-cover">
                            <img
                              className=" w-100 h-100 object-contain rounded-sm "
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                                index?.card?.info.imageId
                              }
                              alt="helo"
                            />
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuItemCard;
{
  /* {index.card.card.itemCards[0].card.info.name} */
}
