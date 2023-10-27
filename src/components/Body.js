
import React, { useState,useEffect } from 'react'
import Card from "./Card";
import Shimmer from './Shimmer';

export default function Body() { 
  
  const[datas,setDatas] = useState([]);
  const[text,setText] = useState("");
  const[filteredData,setFilteredData] = useState([])   
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
 useEffect(()=>{
  fetchData();
  
},[])
 
  
  console.log("rendering");
        return datas?.length === 0? <Shimmer /> : (
          <div className="body">
            <div className="filter">
              <button className='filter-btn' onClick={()=>{setFilteredData(datas.filter((data)=>data.info.avgRating >4.1))}}>Top Rated Restarent</button>
            </div>
            <div className="search">
              <label htmlFor="search"><input type="text" name="search" id="search" value={text} onChange={(e)=>{setText(e.target.value);}}/><button type="button" onClick={()=>{const filtredRes = datas.filter((data)=>(data.info.name.toLowerCase().includes(text.toLowerCase())));
                                                                                                                setFilteredData(filtredRes);
                                                                                                                }}>
                                                                                                                Filter hotels</button></label>
            </div>
            <div className="card-container">
              {filteredData.map((data)=>(<Card key = {data.info.id}Data = {...data}/>))}        
              
            </div>
          </div>
        );
      };

