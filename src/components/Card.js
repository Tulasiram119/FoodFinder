import React from "react";
import { CDN_LINK } from "../utilis/constants";
 function Card(props) {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla } =
    props?.Data?.info;
  
  {
    /*trtrtrttr */
  }
  return (
    <div className="res-card m-4 p-4 w-64 bg-gray-100 break-words rounded-lg whitespace-normal h-96 overflow-hidden hover:bg-gray-200">
      <img
        src={`${CDN_LINK}${cloudinaryImageId}`}
        alt=""
        className="item-img rounded-lg w-full h-36"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{costForTwo}</h4>      
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>{cuisines.join(",")}</h4>
      
    </div>
  );
}

export const promotedCard = (Card)=>{

  return (props)=>{

    return(
      <div>
      <label className="absolute bg-black text-white my-2 mx-4 rounded-lg p-2">Promoted</label>
      <Card Data = {...(props.Data)} />
      </div>
    )
  }
}
export default Card;