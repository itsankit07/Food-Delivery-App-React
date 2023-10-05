import Card,{withPromotedLabel} from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import { restaurant_api } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () =>{
    
    const [searchText,setSearchText] = useState("");  
    const [restaurantList,setRestaurantList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);

    const CardPromoted = withPromotedLabel(Card);

    const {setUserName} = useContext(UserContext);
   
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async () =>{
        const data = await fetch(restaurant_api);
        const json_data = await data.json();
        setRestaurantList(json_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
        setFilteredList(json_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        console.log(json_data);
    }

    const status = useOnlineStatus()

    if(status===false)  return <h1>Internet Not Connected !! Kindly Connect to The Internet</h1>
 
    if(restaurantList?.length===0){
    return <Shimmer/>
    }

    return (
    <>
    <div className = "body"> 
     
    <div className="filter p-5">   

    <button className = "filter_btn" onClick = {()=>{
        let resList2 =  restaurantList?.filter((res)=>res.info.avgRating > 4);
        setFilteredList(resList2);
        }}>
        Top Rated Restaurant
    </button>
   
    <input
     type="text" 
     data-testid = "input"
     className="search-box" 
     value={searchText}
     onChange={(e)=>{setSearchText(e.target.value)}}
    />

    <button data-testid = "top-rated" className="search-btn"
     onClick={
        ()=>{
            const filteredRes = restaurantList?.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredList(filteredRes);
        }}>
        Search
    </button>

    <div className="mx-4 px-4">
        <label htmlFor="">Username:</label>
        <input className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)} />

    </div>

    </div>

   
   
   
    <div className = "restaurantContainer p-5">
    { 
    filteredList?.map((restaurant)=>{
             return <Link 
             to = {"restaurants/" + restaurant.info.id} 
             key ={restaurant?.info.id} 
             > 
              {/* if the restaurant is promotes add promoted label to it */}
             {restaurant.info.avgRating>4? <CardPromoted resData = {restaurant}/> : <Card resData = {restaurant} />  }
             
             </Link>
     })
    }
    </div>  

    </div>
    </>
    );
}

export default Body;