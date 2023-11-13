
import React, { useState,useEffect, useContext } from 'react'
import Card ,{promotedCard} from "./Card";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';
import UserContext from '../utilis/UserContext';

const Body = () =>{ 
  
  const[datas,setDatas] = useState([]);
  const[text,setText] = useState("");
  const[filteredData,setFilteredData] = useState([]);
  const PromotedCard = promotedCard(Card); 
  const{loggedUser,setUser} = useContext(UserContext);
  useEffect(()=>{
    fetchData();
    
  },[]) 
 const fetchData = async ()=>{
  
  try {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.433546&lng=78.41905729999999");
    const parsedData = await data.json();  
    setDatas(parsedData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    setFilteredData(parsedData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
  } catch (error) {
    console.log(error);
  }
    
  
  
 }
 
 
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(<h1>Check</h1>)
  }
        return datas?.length === 0? (<Shimmer />) : (
          <div className="body">
            <div className="flex ">
            <div className="search m-4 px-4">
              <input type="text" className="border border-solid border-black mr-4"value={text} onChange={(e)=>{setText(e.target.value);}}/><button type="button" className=' bg-gray-400 rounded-lg px-2' onClick={()=>{const filtredRes = datas.filter((data)=>(data.info.name.toLowerCase().includes(text.toLowerCase())));
                                                                                                                setFilteredData(filtredRes);
                                                                                                                }}>
                                                                                                                Filter hotels</button>
            </div>
            <div className=" m-4 px-4 flex items-center">
              <button className= " bg-green-200 px-4 rounded-lg" onClick={()=>{setFilteredData(datas.filter((data)=>data.info.avgRating >4.1))}}>Top Rated Restarent</button>
              </div>
            <div className=" m-4 px-4 flex items-center">
              <input className='border border-black' value={loggedUser} onChange={(e)=>setUser(e.target.value)}/>
              </div>
            
            
            </div>
            <div className="card-container flex flex-wrap">
              {/* this is where have to write logic for promoted tag */}
              
              {filteredData.map((data)=>(<Link key = {data.info.id} to={`/restaurants/${data.info.id}`}>
                {data.info.promoted?<PromotedCard Data = {{...data}}/>:<Card Data = {{...data}}/>} </Link>))}        
              
            </div>
          </div>
        );
      };

export default Body;
