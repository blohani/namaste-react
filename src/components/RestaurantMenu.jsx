/* eslint-disable react/react-in-jsx-scope */

import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {ItemCategory} from "./foods/ItemCategory";

const RestaurantMenu = () =>{
    const resId = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log("resInfo: ", resInfo);
    const resDetails = resInfo?.data?.cards[2].card?.card?.info;
    const menus = 
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    // const allMenus = 
    // resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const allMenus = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter((item)=> item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    const {name, avgRating, cuisines, costForTwoMessage} = resDetails || {};
    // console.log("menus: ", menus);
    // console.log("resDetails", resDetails);
    // console.log("menus", menus);
    return  menus == null ? (<Shimmer />) : (
        <div className="rest_container">
            <h1 className="font-bold">{name}</h1>
            <h1 className="font-semibold">Rating - {avgRating}, Cost - {costForTwoMessage}</h1>
            <h2 className="font-black">Menu</h2>
            <h2>Cuisines - {cuisines.join(", ")}</h2>
            <hr />
            {/* {        
                allMenus.map((itemCategory)=>{
                    // console.log("ItemCategory: ", itemCategory)
                // return <Food key={ItemCategory?.card?.card?.title} foodBlock = {ItemCategory?.card?.card} />
                return <ItemCategory key={itemCategory?.card?.card?.title} category = {itemCategory} />
                    
            })
            } */}

{        
                menus?.categories?.map((itemCategory, index)=>{
                    // console.log("ItemCategory: ", itemCategory);
                // return <Food key={ItemCategory?.card?.card?.title} foodBlock = {ItemCategory?.card?.card} />
                return <ItemCategory key={index} category = {itemCategory} />
                    
            })
            }
        </div>
    )
}

export default RestaurantMenu;