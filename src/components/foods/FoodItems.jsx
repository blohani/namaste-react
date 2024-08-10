/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import Item from "./Item";
import { IMAGE_PATH } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

export const FoodItems = (props) => {
  // const item = props?.item?.itemCards;
  // console.log("props:", props);

  // console.log("Item Props: ", props);
  // return(
  //     <div>
  //     <ul className="lit-item list-disc">
  //     <Item item={item} />
  //     </ul>
  //     </div>
  // )

  const [showItems, setShowItems] = useState(false);
  // const handleClick = ()=>{

  //     setShowItems(!showItems)
  // }

  const item = props;
  const dispatch = useDispatch();
  const imageId = item?.item?.card?.info?.imageId;
  //   console.log("props:", props);
  const handleAddItem = (item) => {
    // Dispath an action
    dispatch(addItem(item));
  };

  return (
    <div
      // data-testid="foodItems"
      className="m-2 p-2"
    >
      <div className="p-2 flex justify-between">
        <div className="flex justify-between my-2 py-2">
          <p className="font-normal">{item?.item?.card?.info?.description}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => handleAddItem(item)}
            className="p-2 absolute rounded bg-black w- text-white cursor-pointer top-1 left-1"
          >
            Add+
          </button>
          <img className="w-40" src={IMAGE_PATH + imageId} />
        </div>
      </div>
    </div>
    //     <div>
    //     <ul className="lit-item list-disc">
    // <Item foodItem={item} />
    //     </ul>
    //     </div>
  );
};
