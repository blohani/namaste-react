import React, { useState } from "react";
import { FoodItems } from "./FoodItems";
import Item from "./Item";
import { IMAGE_PATH } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

export const FoodCategories = ({ categories }) => {
  // console.log("Categories---", categories);
  // const title = props?.title;
  // const categories = props?.categories;
  // console.log("categories props: ", categories);
  const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  // const dispatch = useDispatch();
  // const handleAddItem =(item) =>{
  //     // console.log(item);
  //     // Dispath an action
  //     dispatch(addItem(item));

  // }

  return (
    <div className="m-2 p-2">
      {categories?.map((item) => {
        // console.log("item--:", item);
        const imageId = item?.card?.info?.imageId;

        return (
          <div data-testid="foodItems" key={item?.card?.info?.name}>
            <div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
              <div className="flex justify-between">
                <p
                  onClick={handleClick}
                  className="cursor-pointer font-bold text-lg"
                >
                  {item?.card?.info?.name}
                </p>
                <p>⬇️</p>
              </div>
              <FoodItems item={item} />

              {/* <div className="m-2 p-2">
                <div className="p-2 flex justify-between">
                <div className="flex justify-between my-2 py-2">
                <p className="font-normal">{item?.card?.info?.description}</p>
                </div>
                <div className="relative"> <span onClick={()=>handleAddItem(item)} className="p-2 absolute rounded bg-black w- text-white cursor-pointer top-1 left-1">Add+</span>
                    <img className="w-40" src={IMAGE_PATH + imageId} /></div>
                </div>
                </div>
                </div>
                </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
