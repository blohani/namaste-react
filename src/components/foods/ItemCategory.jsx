/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { FoodCategories } from "./FoodCategories";

export const ItemCategory = (props) =>{
    // const title = props.category?.card?.card?.title;
    // const categories = props.category?.card?.card;

    const title = props.category?.title;
    const categories = props.category?.itemCards;

    // console.log("item category received: ", props);
    return (
        <>
        {/* <h3 className="font-semibold">{title}</h3> */}
        <FoodCategories key={title + 1} title={title} categories={categories} />
        </>
    )
}