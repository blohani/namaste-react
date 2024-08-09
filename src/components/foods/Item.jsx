import React from "react";
import {IMAGE_PATH} from "../../utils/constants"

const Item = (props) => {
    const title = props?.foodItem?.item?.card?.info?.name;
    const path = props?.foodItem?.item?.card?.info?.imageId;
    const itemClicked = (event) =>{
        console.log("Clicked item", event);
    }
    // const showItems = props?.showItems;
    // console.log("title: ", props);
    // console.log("index: ", props?.index);
    // console.log("showItems: ", showItems);
    return (
        <div className="w-12/12 border-gray-200 boder-b-2 text-left">
            {/* {
        item?.map((dish)=> {
            // console.log("dish", dish);
            return (
                <li key={dish?.card?.info?.id} className="flex justify-between m-2 p-2">
                    <div>
            <p className="font-semibold">{dish?.card?.info?.name}</p>
            <p className="font-normal">{dish?.card?.info?.category}</p>
            <p className="font-normal">Rs. {(dish?.card?.info?.price)/100 || (dish?.card?.info?.defaultPrice)/100}</p>
            <p className="font-normal">{dish?.card?.info?.description}</p>
            </div>
            <p><img className="w-40" src={IMAGE_PATH + dish?.card?.info?.imageId} /></p>
            </li>
            )
        })
    } */}

{

                <li className="flex justify-between m-2 p-2">
                    <div>
            {/* <p className="font-semibold">{title}</p> */}
            
                        <div className="flex justify-between my-2 py-2">
            <div className="relative"> <span onClick={itemClicked}  className="p-2 absolute rounded bg-black w- text-white cursor-pointer top-1 left-1">Add+</span>
                <img className="w-40" src={IMAGE_PATH + path} /></div>
            </div>
            
            </div>
            
            </li>

    }
        </div>
    )
}

export default Item