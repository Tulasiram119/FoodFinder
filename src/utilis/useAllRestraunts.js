import { useState, useEffect } from "react";

const useAllRestraunts = ()=>{
    const [datas,setDatas] = useState("");
    const fetchData = async()=>{
        try {
            const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.433546&lng=78.41905729999999");
            const json = await data.json();
            setDatas(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return datas;
}

export default useAllRestraunts;