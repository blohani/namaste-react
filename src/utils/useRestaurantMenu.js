// import { useEffect } from "react";
import { useEffect, useState } from "react";

import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] =  useState([]);

        //fetch
        useEffect(()=>{
            fetchData(resId);
        }, []);

        const fetchData = async() => {
            const url = MENU_API + resId.resId;
            const menu = await fetch(url);
            const json = await menu.json()
            setResInfo(json);
            // console.log("resInfo json: ", resInfo);
        }

    return resInfo;
}

export default useRestaurantMenu;