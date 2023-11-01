import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestraunt = (resId)=>{
    const [resData,setResData] = useState(null);
    const fetchData = async()=>{
        const data = await fetch(MENU_API+`${resId}`);
        const json = await data.json();
        setResData(json.data);
        
    }
    useEffect(()=>{
        fetchData();
    },[])
    return resData;
}
export default useRestraunt;