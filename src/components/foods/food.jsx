
import React from "react";
import SubHeading from "./SubHeading";
import ItemsList from "./ItemsList";

const Food = (prop) =>{
    const title = prop.foodBlock?.title;
    // if(prop?.foodBlock?.itemCards.length == 0)
    //     return null;
    return (
        <>
             {title && <SubHeading title={title} /> }
            <ItemsList items={prop?.foodBlock?.categories} />
            <hr />
        </>
    )
}

export default Food