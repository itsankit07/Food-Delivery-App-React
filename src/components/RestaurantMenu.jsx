import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const[showIndex,setShowIndex] = useState(null);


    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer/>

   
    const{name , avgRating , areaName , city , costForTwoMessage , cuisines , sla:{deliveryTime}} = resInfo?.data?.cards[0]?.card?.card?.info;

    const{itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const data = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    const categories = Object.values(data)[0].filter((category)=>
    (category?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );

    // console.log(categories);


    return (
    <div className="w-6/12 m-auto">

        <div className = "text-center my-5 m-auto flex left justify-between border-b-2 border-spacing-y-5 border-dotted border-b-slate-950" > 
           
          
           <div className = "">

           <h1 className="text-left my-1 text-xl font-bold ">{name}</h1>
           <h4 className="text-left text-sm">{cuisines.join(",")}</h4>
           <h4 className="text-left my-2 text-xs">{areaName} - {city}</h4>

           </div>

           <div className="flex justify-center items-center">

           <h4 className="text-right font-semibold ">{avgRating} ★</h4>

           </div>


        </div>
       
        <div className="m-auto flex gap-5">
        <span> 🕑 {deliveryTime} MINS</span>
        <span> 💵 {costForTwoMessage}</span>
        </div>
      
        <div className="text-center">

            {
            categories.map((category,index)=>{
               return <RestaurantCategory 
               key = {index}
               item = {category?.card?.card} 
               showItems = {index==showIndex? true : false}
               index = {index}
               setShowIndex = {(index)=>setShowIndex(index)}

               />
            })
           }

        </div>

    </div>

    );
}

export default RestaurantMenu;


// <h2>Menu</h2>
//            <ul>
//             {
//                 itemCards?.map((item)=>{
//                    return <li key = {item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}  </li>
//                 })
//             }
//            </ul>