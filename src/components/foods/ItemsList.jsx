import React from "react";
import Item from "./Item";

const ItemsList = (items)=>{
    // const items = props?.itemCards;
    console.log("items:", items?.items);
    return (<ul className="list-disc list-inside my-2 py-2">
        {
            items?.items?.map((item, index) => <Item key={index} title={item?.title} items={item?.itemCards} />)
        } 
    </ul>)
}

export default ItemsList