
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestraunt from "../utilis/useRestraunt";
const RestarauntCard = ()=>{
    // const [resInfo,setResInfo] = useState(null);
    const {id:resId} = useParams();
    const resInfo = useRestraunt(resId); 
    
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