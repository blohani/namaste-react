/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { CDN_URL } from "../utils/constants";
export const RestCard = (props) => {
  // const { imageUrl, name, rating, subtitleData, proOfferText, note } =
  //   props?.resData; // Zomato API
  // console.log("props", props);
  const { info } = props?.resData; // Swiggy API
  return (
    // -----For Zomato API------
    // <div className="rest-card">
    //   <img alt="food logo" src={imageUrl} />
    //   <h2 className="title">{name}</h2>
    //   <p className="detail_type1">
    //     Cuisines - {subtitleData?.cuisines[0]?.name}
    //   </p>
    //   <p className="detail_type2">Rating - {rating?.aggregate_rating}</p>
    //   <p className="detail_type3">Locality - {subtitleData?.locality?.text}</p>
    //   <p className="detail_type3">Offer - {proOfferText}</p>
    //   <p className="detail_type4">Description - {note}</p>
    // </div>

    // ------For Swiggy API------
    <div className="m-4 p-4 w-[200px] rounded-lg bg-slate-100 max-h-full hover:bg-slate-200">
      {info?.cloudinaryImageId ? (
        <img alt={info?.name} className="w-40" src={CDN_URL + info?.cloudinaryImageId} />
      ) : (
        <img alt={info?.name} className="w-40" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      )}
      
      <h2 className="font-bold py-4 text-lg">{info?.name}</h2>
      <p className="detail_type1">Cuisines - {info?.cuisines.join(", ")}</p>
      <p className="detail_type2">Rating - {info?.avgRating}</p>
      <p className="detail_type3">Locality - {info?.locality}</p>
      <p className="detail_type3">Cost of Two - {info?.costForTwo}</p>
      <p className="detail_type3">
        Delivery Time - {info?.sla?.deliveryTime} mins
      </p>
    </div>
  );
};

export const withPromotedLabel = (RestCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute m-2 p-2 rounded-lg bg-black text-white">Promoted</label>
        <RestCard {...props} />
      </div>
    );
  };
};
