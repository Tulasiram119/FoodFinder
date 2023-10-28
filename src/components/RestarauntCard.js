import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilis/constants";
const RestarauntCard = ()=>{
    const [resInfo,setResInfo] = useState(null);
    const {id:resId} = useParams();
    console.log(resId);
    const fetchData = async()=>{
        const data = await fetch(MENU_API+`${resId}`);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(resInfo === null){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
    console.log(itemCards);
    return (
        
        <div className="restaruant">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=>(<li key={item.card.info.id}>{item.card.info.name} {item.card.info.price}</li>
                ))}
            </ul>
        </div>
    )
}
export default RestarauntCard;