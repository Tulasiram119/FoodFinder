import React from "react";
import { CDN_LINK } from "../utilis/constants";
export default function Card(props) {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla } =
    props?.Data?.info;
  {
    /*trtrtrttr */
  }
  return (
    <div className="res-card">
      <img
        src={`${CDN_LINK}${cloudinaryImageId}`}
        alt=""
        className="item-img"
      />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
}
