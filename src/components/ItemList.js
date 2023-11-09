import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utilis/constants";
import { addItem } from "../utilis/cartSlice";

const ItemList = ({itemCards})=>{
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return(
        <div className="my-4">
            {itemCards.map((item)=>(<div key={item?.card?.info?.id} className="m-2 p-2 border-b-2 border-gray-400 flex justify-between">
                <div className="flex flex-col justify-start text-left">
                <span className="font-semibold">{item?.card?.info?.name}</span>
                <span>&#x20B9;{item?.card?.info?.price/100}</span>
                </div>
                <div>
                    <img src={CDN_LINK+item?.card?.info?.imageId} className="w-20 h-16 rounded-lg" alt="itemimage"  />
                    
                    <button className="bg-black text-white shadow-md border border-green-300 rounded-lg hover:shadow-xl w-full hover:bg-white hover:text-black" onClick={()=> handleAddItem(item)}>Add+</button>
                </div>
                {/* <p>{item?.card?.info?.description}</p> */}
                </div>))}
        </div>
    );
}

export default ItemList;