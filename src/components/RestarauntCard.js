
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestraunt from "../utilis/useRestraunt";
import RestarauntCategory from "./RestrauntCategory";
const RestarauntCard = ()=>{
    // const [resInfo,setResInfo] = useState(null);
    const {id:resId} = useParams();
    const [showIndex,setShowIndex] = useState(null);
    
    const resInfo = useRestraunt(resId); 
     
    if(resInfo === null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
    //const {filteredCards} = resInfo?.cards[3]?.groupedCard;
    const filteredCards = (resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    console.log(filteredCards);
    return (
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")+" : "+costForTwoMessage}</p>
            {filteredCards.map((catagery,index)=><RestarauntCategory key = {catagery?.card?.card.title} data = {catagery?.card?.card} show = {index === showIndex && true} setShowIndex = {()=>{setShowIndex(index)}}/>)}
            
        </div>
    )
}
export default RestarauntCard;